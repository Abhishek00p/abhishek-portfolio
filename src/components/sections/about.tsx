import { GraduationCap } from "lucide-react";
import { about, education, site } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-16 lg:items-start">
          {/* Portrait — centered on mobile, sticky beside the text on desktop */}
          <Reveal delay={0.05}>
            <div className="lg:sticky lg:top-28">
              <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px] lg:mx-0">
                {/* soft accent glow behind the subject */}
                <div
                  aria-hidden
                  className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent/15 blur-3xl"
                />
                <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-surface-2/70 via-surface-1/40 to-surface-1/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/profile.webp"
                    alt={`${site.name} — ${site.role}`}
                    width={850}
                    height={1279}
                    className="h-auto w-full select-none object-cover"
                    draggable={false}
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-canvas/70 to-transparent"
                  />
                </div>
              </div>

              {/* Education — under the photo on desktop */}
              <div className="mt-8 hidden space-y-3 lg:block">
                <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-faint">
                  <GraduationCap className="h-4 w-4" /> Education
                </h3>
                {education.map((e) => (
                  <div key={e.degree} className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-foreground">{e.degree}</p>
                      <p className="text-sm text-muted">{e.school}</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-faint">{e.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Text column */}
          <div>
            <SectionHeading index="01 / " eyebrow="About" title="Engineer first, Flutter specialist." />
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-foreground/90">{about.lead}</p>
            </Reveal>

            <div className="mt-6 space-y-5">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <p className="text-base leading-relaxed text-muted sm:text-lg">{p}</p>
                </Reveal>
              ))}
            </div>

            {/* Education — inline on mobile (hidden on desktop, shown under photo there) */}
            <Reveal delay={0.15}>
              <div className="mt-10 space-y-3 lg:hidden">
                <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-faint">
                  <GraduationCap className="h-4 w-4" /> Education
                </h3>
                {education.map((e) => (
                  <div key={e.degree} className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-foreground">{e.degree}</p>
                      <p className="text-sm text-muted">{e.school}</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-faint">{e.year}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
