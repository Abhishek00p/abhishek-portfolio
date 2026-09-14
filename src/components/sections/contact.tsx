import { Mail, Phone, Linkedin, Github, ArrowUpRight, FileDown } from "lucide-react";
import { site, contact, profiles } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Magnetic } from "@/components/ui/magnetic";

/** tel: href needs a clean, dial-safe number — strip spaces & dashes. */
const telHref = `tel:${contact.phone.replace(/[\s-]/g, "")}`;

export function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden border-t border-border/50">
      {/* Background flourish — decorative only */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade opacity-40" />
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />
      </div>

      <div className="container">
        <SectionHeading
          index="09 / "
          eyebrow="Contact"
          title="Let's work together."
          description="I'm open to Flutter / Mobile Engineer roles and product-focused teams."
          align="center"
        />

        <Reveal delay={0.1}>
          <h3 className="mx-auto mt-12 max-w-3xl text-center font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Let&apos;s build{" "}
            <span className="text-gradient">something great.</span>
          </h3>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-muted">
            Based in {site.location}, open to remote. If you&apos;re hiring for mobile — or want a
            second pair of hands that ships to both stores — I&apos;d love to hear about it.
          </p>
        </Reveal>

        {/* Primary + secondary CTAs */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Magnetic strength={0.3}>
              <a href={`mailto:${contact.email}`} className="btn-primary">
                Email me
                <Mail className="h-4 w-4" aria-hidden />
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a href={site.resumePath} download className="btn-secondary">
                <FileDown className="h-4 w-4" aria-hidden />
                Download Résumé
              </a>
            </Magnetic>
          </div>
        </Reveal>

        {/* Contact method pills */}
        <Reveal delay={0.25}>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-3 rounded-lg border border-border/70 bg-surface-2/40 px-4 py-3 transition-colors duration-300 hover:border-accent/50"
              >
                <Mail className="h-4 w-4 text-accent" aria-hidden />
                <span className="flex flex-col text-left">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                    Email
                  </span>
                  <span className="text-sm text-foreground">{contact.email}</span>
                </span>
              </a>
            </li>

            <li>
              <a
                href={telHref}
                className="group flex items-center gap-3 rounded-lg border border-border/70 bg-surface-2/40 px-4 py-3 transition-colors duration-300 hover:border-accent/50"
              >
                <Phone className="h-4 w-4 text-accent" aria-hidden />
                <span className="flex flex-col text-left">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                    Phone
                  </span>
                  <span className="text-sm text-foreground">{contact.phone}</span>
                </span>
              </a>
            </li>

            {profiles.linkedin && (
              <li>
                <a
                  href={profiles.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile (opens in a new tab)"
                  className="group flex items-center gap-3 rounded-lg border border-border/70 bg-surface-2/40 px-4 py-3 transition-colors duration-300 hover:border-accent/50"
                >
                  <Linkedin className="h-4 w-4 text-accent" aria-hidden />
                  <span className="flex flex-col text-left">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                      LinkedIn
                    </span>
                    <span className="flex items-center gap-1 text-sm text-foreground">
                      Connect
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-accent" aria-hidden />
                    </span>
                  </span>
                </a>
              </li>
            )}

            {profiles.github && (
              <li>
                <a
                  href={profiles.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile (opens in a new tab)"
                  className="group flex items-center gap-3 rounded-lg border border-border/70 bg-surface-2/40 px-4 py-3 transition-colors duration-300 hover:border-accent/50"
                >
                  <Github className="h-4 w-4 text-accent" aria-hidden />
                  <span className="flex flex-col text-left">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                      GitHub
                    </span>
                    <span className="flex items-center gap-1 text-sm text-foreground">
                      View code
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-accent" aria-hidden />
                    </span>
                  </span>
                </a>
              </li>
            )}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
