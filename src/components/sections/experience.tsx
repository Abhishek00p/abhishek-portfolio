"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <section id="experience" className="section border-t border-border/50">
      <div className="container">
        <SectionHeading
          index="03 / "
          eyebrow="Experience"
          title="Where I've shipped."
          description="Two roles, four industries, one throughline — owning features end-to-end and taking them all the way to release."
        />

        <div ref={ref} className="relative mt-14 pl-8 sm:pl-10">
          {/* Rail */}
          <div className="absolute left-[7px] top-2 h-full w-px bg-border/60 sm:left-[11px]" aria-hidden />
          <motion.div
            aria-hidden
            style={{ scaleY: reduce ? 1 : scaleY }}
            className="absolute left-[7px] top-2 h-full w-px origin-top bg-gradient-to-b from-accent via-accent to-transparent sm:left-[11px]"
          />

          <ol className="space-y-12">
            {experience.map((job, i) => (
              <li key={job.company} className="relative">
                {/* Node */}
                <span
                  className="absolute -left-8 top-1.5 grid h-4 w-4 place-items-center rounded-full border border-accent/60 bg-canvas sm:-left-10"
                  aria-hidden
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>

                <Reveal delay={i * 0.05}>
                  <article className="card p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {job.role}
                        </h3>
                        <p className="mt-0.5 flex items-center gap-2 text-accent">
                          <Briefcase className="h-4 w-4" />
                          <span className="font-medium">{job.company}</span>
                        </p>
                      </div>
                      <span className="rounded-md border border-border/70 bg-surface-2/50 px-2.5 py-1 font-mono text-xs text-muted">
                        {job.period}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted">{job.summary}</p>

                    <ul className="mt-5 space-y-2.5">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70"
                            aria-hidden
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {job.stack.map((s) => (
                        <li key={s} className="chip">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
