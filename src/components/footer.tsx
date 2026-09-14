import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";
import { site, contact, profiles } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="container py-10">
        {/* Top row — identity + links */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display font-semibold text-foreground">{site.name}</p>
            <p className="mt-1 text-sm text-muted">
              {site.role} · {site.altRole}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Email
            </a>

            {profiles.linkedin && (
              <a
                href={profiles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
                LinkedIn
              </a>
            )}

            {profiles.github && (
              <a
                href={profiles.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" aria-hidden />
                GitHub
              </a>
            )}
          </nav>
        </div>

        {/* Bottom row — copyright + note + back to top */}
        <div className="mt-8 flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 text-xs text-muted sm:flex-row sm:items-center sm:gap-3">
            <span>© {year} {site.name}</span>
            <span className="hidden h-3 w-px bg-border sm:inline-block" />
            <span>Built with Next.js, TypeScript &amp; Tailwind CSS.</span>
          </div>

          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-xs text-faint transition-colors hover:text-foreground"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
