"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileDown, MapPin } from "lucide-react";
import { site, metrics } from "@/data/site";
import { Magnetic } from "@/components/ui/magnetic";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    ref.current.style.setProperty("--y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)" },
      };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      {/* Layered background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade opacity-70" />
        <div className="glow absolute inset-0 opacity-90 transition-opacity duration-500" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-canvas" />
      </div>

      <div className="container">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          {site.available && (
            <motion.div variants={item} transition={{ duration: 0.6, ease }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface-2/40 px-3 py-1.5 font-mono text-xs text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Open to Flutter / Mobile Engineer roles
              </span>
            </motion.div>
          )}

          <motion.p
            variants={item}
            transition={{ duration: 0.6, ease }}
            className="mt-8 font-mono text-sm text-accent"
          >
            {site.heroKicker}
          </motion.p>

          <motion.h1
            variants={item}
            transition={{ duration: 0.7, ease }}
            className="mt-4 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{site.name}</span>
          </motion.h1>

          <motion.h2
            variants={item}
            transition={{ duration: 0.7, ease }}
            className="mt-5 max-w-3xl font-display text-2xl font-medium leading-tight text-foreground/90 sm:text-3xl"
          >
            Flutter Developer building scalable, production-grade mobile apps.
          </motion.h2>

          <motion.p
            variants={item}
            transition={{ duration: 0.7, ease }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            variants={item}
            transition={{ duration: 0.7, ease }}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-faint"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> {site.location}
            </span>
            <span className="hidden h-3 w-px bg-border sm:inline-block" />
            <span>~{site.yearsExperience} yrs experience</span>
            <span className="hidden h-3 w-px bg-border sm:inline-block" />
            <span>{site.domains.join(" · ")}</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={item}
            transition={{ duration: 0.7, ease }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a href={site.resumePath} download className="btn-secondary">
                <FileDown className="h-4 w-4" />
                Download Résumé
              </a>
            </Magnetic>
            <a href="#contact" className="btn-ghost">
              Contact
            </a>
          </motion.div>

          {/* Inline metric strip */}
          <motion.dl
            variants={item}
            transition={{ duration: 0.7, ease }}
            className="mt-14 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-border/60 bg-border/60 sm:grid-cols-4"
          >
            {metrics.map((m) => (
              <div key={m.label} className="bg-surface-1/60 px-4 py-4">
                <dt className="font-display text-2xl font-semibold text-foreground">{m.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted">{m.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-faint lg:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
