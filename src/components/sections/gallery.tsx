"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { projects } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

/** One composed showcase banner per project (skips projects without one). */
const banners = projects
  .filter((p) => p.banner)
  .map((p) => ({
    slug: p.slug,
    name: p.name,
    domain: p.domain,
    tagline: p.tagline,
    image: p.banner!,
  }));

/* ------------------------------------------------------------------ */
/* A single project showcase banner (wide, one per project)            */
/* ------------------------------------------------------------------ */
function BannerCard({
  name,
  domain,
  tagline,
  src,
  alt,
  onOpen,
}: {
  name: string;
  domain: string;
  tagline: string;
  src: string;
  alt: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${name} showcase`}
      className="group/card relative block w-full overflow-hidden rounded-2xl border border-border/70 bg-surface-2/40 text-left shadow-lg shadow-black/20 outline-none transition-[border-color,box-shadow,transform] duration-300 ease-premium will-change-transform hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="aspect-[16/9] w-full select-none object-cover transition-transform duration-500 ease-premium group-hover/card:scale-[1.03]"
      />

      {/* Bottom gradient + label */}
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-canvas/90 via-canvas/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
        <div>
          <span className="font-mono text-[0.7rem] uppercase tracking-wider text-accent">
            {domain}
          </span>
          <h3 className="mt-1 font-display text-lg font-semibold text-foreground sm:text-xl">
            {name}
          </h3>
          <p className="mt-0.5 hidden max-w-md text-sm text-muted sm:block">
            {tagline}
          </p>
        </div>
        <span className="grid h-9 w-9 shrink-0 translate-y-1 place-items-center rounded-full bg-canvas/80 text-foreground opacity-0 backdrop-blur-sm transition-all duration-300 group-hover/card:translate-y-0 group-hover/card:opacity-100">
          <Maximize2 className="h-4 w-4" aria-hidden />
        </span>
      </div>
    </button>
  );
}

export function Gallery() {
  const reduce = useReducedMotion();
  const [selected, setSelected] = useState<number | null>(null);

  const active = selected !== null ? banners[selected] : null;
  const close = useCallback(() => setSelected(null), []);

  const step = useCallback(
    (dir: 1 | -1) =>
      setSelected((s) =>
        s === null ? s : (s + dir + banners.length) % banners.length,
      ),
    [],
  );

  // Keyboard controls + body scroll lock while the lightbox is open.
  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, close, step]);

  return (
    <section id="gallery" className="section border-t border-border/50">
      <div className="container">
        <SectionHeading
          index="05 / "
          eyebrow="Work Gallery"
          title="One showcase per app."
          description="A single showcase banner for each app I've shipped — real screens from the live Play Store & App Store listings. Tap any banner to view it full-size."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {banners.map((b, i) => (
            <Reveal key={b.slug} y={24}>
              <BannerCard
                name={b.name}
                domain={b.domain}
                tagline={b.tagline}
                src={b.image.src}
                alt={b.image.alt}
                onOpen={() => setSelected(i)}
              />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox — steps across projects. */}
      {active && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-canvas/85 p-4 backdrop-blur-md sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} showcase`}
        >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-surface-2/60 text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>

          {/* Prev */}
          {banners.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous showcase"
              className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border/70 bg-surface-2/60 text-foreground transition-colors hover:border-accent/50 hover:text-accent sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden />
            </button>
          )}

          {/* Image + caption */}
          <motion.figure
            key={active.image.src}
            className="flex max-h-full flex-col items-center gap-4"
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.image.src}
              alt={active.image.alt}
              className="max-h-[80vh] w-auto max-w-full rounded-2xl border border-border/60 object-contain shadow-2xl"
            />
            <figcaption className="max-w-lg text-center text-sm text-muted">
              <span className="font-medium text-foreground">{active.name}</span>{" "}
              · {active.domain}
              <span className="mt-1 block font-mono text-xs text-faint">
                {selected! + 1} / {banners.length}
              </span>
            </figcaption>
          </motion.figure>

          {/* Next */}
          {banners.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next showcase"
              className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border/70 bg-surface-2/60 text-foreground transition-colors hover:border-accent/50 hover:text-accent sm:right-6"
            >
              <ChevronRight className="h-6 w-6" aria-hidden />
            </button>
          )}
        </motion.div>
      )}
    </section>
  );
}
