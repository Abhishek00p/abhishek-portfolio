import { FileDown, ArrowUpRight } from "lucide-react";
import { site, profiles } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";

export function ResumeCTA() {
  return (
    <section aria-label="Résumé" className="section border-t border-border/50">
      <div className="container">
        <Reveal>
          <div className="card relative overflow-hidden p-8 sm:p-10">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-60" />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-[90px]"
            />
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-xl">
                <span className="eyebrow">Résumé</span>
                <h2 className="section-title mt-3">Want the complete picture?</h2>
                <p className="lede mt-3 text-base leading-relaxed">
                  The full résumé covers every role, project and tool in detail — download the PDF or
                  connect on LinkedIn.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a href={site.resumePath} download className="btn-primary">
                  <FileDown className="h-4 w-4" aria-hidden />
                  Download Résumé
                </a>
                {profiles.linkedin && (
                  <a
                    href={profiles.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open LinkedIn profile in a new tab"
                    className="btn-secondary"
                  >
                    LinkedIn
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
