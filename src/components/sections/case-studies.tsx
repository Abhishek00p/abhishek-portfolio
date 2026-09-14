import { ArrowUpRight, Target, TrendingUp, User, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { caseStudies } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/** Mono uppercase section label with a leading icon — used inside each case study. */
function BlockLabel({
  icon: Icon,
  children,
  className,
}: {
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent",
        className,
      )}
    >
      <Icon className="h-4 w-4" aria-hidden />
      {children}
    </span>
  );
}

export function CaseStudies() {
  return (
    <section id="case-studies" className="section border-t border-border/50">
      <div className="container">
        <SectionHeading
          index="06 / "
          eyebrow="Case Studies"
          title="A closer look at the hard parts."
          description="Deeper engineering narratives on the two strongest projects — the problem, the approach, and the measurable result."
        />

        <div className="mt-14 space-y-8 lg:space-y-10">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 0.1}>
              <article className="card p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                  {/* Meta column */}
                  <div className="lg:w-1/3">
                    <div className="lg:sticky lg:top-24">
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                        {study.domain}
                      </span>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                        {study.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {study.headline}
                      </p>

                      <div className="mt-6 flex items-start gap-2">
                        <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-faint">
                          <User className="h-3.5 w-3.5" aria-hidden />
                          Role
                        </span>
                        <span className="text-sm leading-relaxed text-foreground/85">
                          {study.role}
                        </span>
                      </div>

                      <ul className="mt-5 flex flex-wrap gap-2">
                        {study.stack.map((s) => (
                          <li key={s} className="chip">
                            {s}
                          </li>
                        ))}
                      </ul>

                      {study.link && (
                        <a
                          href={study.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${study.link.label} — ${study.name} (opens in a new tab)`}
                          className="mt-6 inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-surface-2/50 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                        >
                          {study.link.label}
                          <ArrowUpRight className="h-4 w-4" aria-hidden />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Narrative column */}
                  <div className="lg:flex-1">
                    <div className="space-y-8">
                      {/* Problem */}
                      <div>
                        <BlockLabel icon={Target}>Problem</BlockLabel>
                        <p className="mt-3 text-sm leading-relaxed text-foreground/85 sm:text-base">
                          {study.problem}
                        </p>
                      </div>

                      {/* Approach */}
                      <div>
                        <BlockLabel icon={Wrench}>Approach</BlockLabel>
                        <ol className="mt-4 space-y-4">
                          {study.approach.map((step, idx) => (
                            <li key={step} className="flex gap-4">
                              <span className="shrink-0 font-mono text-sm text-accent">
                                {String(idx + 1).padStart(2, "0")}
                              </span>
                              <span className="text-sm leading-relaxed text-foreground/85 sm:text-base">
                                {step}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Result */}
                      <div className="rounded-lg border border-accent/30 bg-accent/5 p-4 sm:p-5">
                        <BlockLabel icon={TrendingUp}>Result</BlockLabel>
                        <p className="mt-3 font-medium leading-relaxed text-foreground">
                          {study.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
