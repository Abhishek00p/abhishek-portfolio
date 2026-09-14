import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Project = (typeof projects)[number];

/** Store / external link button — reused by featured and non-featured cards. */
function ProjectLinks({ project }: { project: Project }) {
  if (project.links.length === 0) return null;
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {project.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} on ${link.label}`}
          className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-surface-2/50 px-3 py-1.5 text-xs font-medium text-foreground transition-colors duration-200 hover:border-accent/50 hover:text-accent"
        >
          {link.label}
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </a>
      ))}
    </div>
  );
}

/** Stack chips row. */
function StackChips({ stack }: { stack: readonly string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {stack.map((tech) => (
        <li key={tech} className="chip">
          {tech}
        </li>
      ))}
    </ul>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <StaggerItem
      as="article"
      className="card card-hover group relative overflow-hidden p-6 sm:p-7"
    >
      {/* Premium hover detail: thin accent line across the top */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <span className="font-mono text-xs uppercase tracking-wider text-accent">
        {project.domain}
      </span>
      <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
        {project.name}
      </h3>
      <p className="mt-1 text-muted">{project.tagline}</p>

      <div className="mt-5 h-px w-full bg-border/60" aria-hidden />

      <p className="mt-5 text-sm leading-relaxed text-muted">{project.context}</p>

      <div className="mt-5">
        <span className="font-mono text-xs uppercase tracking-wider text-faint">
          What I did
        </span>
        <ul className="mt-3 space-y-2.5">
          {project.contributions.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-foreground/85"
            >
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <StackChips stack={project.stack} />
      <ProjectLinks project={project} />
    </StaggerItem>
  );
}

function CompactCard({ project }: { project: Project }) {
  return (
    <StaggerItem
      as="article"
      className="card card-hover group relative overflow-hidden p-5 sm:p-6"
    >
      <span className="font-mono text-xs uppercase tracking-wider text-accent">
        {project.domain}
      </span>
      <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
        {project.name}
      </h3>
      <p className="mt-1 text-sm text-muted">{project.tagline}</p>

      <StackChips stack={project.stack} />
      <ProjectLinks project={project} />
    </StaggerItem>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section border-t border-border/50">
      <div className="container">
        <SectionHeading
          index="04 / "
          eyebrow="Featured Projects"
          title="Products I've shipped."
          description="Real, live production apps across four industries — on the Play Store and App Store, used by real people, not tutorial builds."
        />

        <Stagger
          className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2"
          gap={0.06}
        >
          {featured.map((project) => (
            <FeaturedCard key={project.slug} project={project} />
          ))}
        </Stagger>

        {others.length > 0 && (
          <>
            <h3 className="mt-14 font-mono text-sm uppercase tracking-wider text-faint">
              More work
            </h3>
            <Stagger
              className={cn("mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2")}
              gap={0.06}
            >
              {others.map((project) => (
                <CompactCard key={project.slug} project={project} />
              ))}
            </Stagger>
          </>
        )}
      </div>
    </section>
  );
}
