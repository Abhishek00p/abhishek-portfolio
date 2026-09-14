import type { LucideIcon } from "lucide-react";
import { Cable, Gauge, Layers, Radio, Rocket, FlaskConical, Wrench } from "lucide-react";
import { engineeringHighlights } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";

const iconByTitle: Record<string, LucideIcon> = {
  "Clean Architecture & state": Layers,
  "Performance & memory": Gauge,
  "Real-time systems": Radio,
  "Native & third-party integration": Cable,
  "Testing discipline": FlaskConical,
  "CI/CD & release ownership": Rocket,
};

export function Engineering() {
  return (
    <section id="engineering" className="section border-t border-border/50">
      <div className="container">
        <SectionHeading
          index="07 / "
          eyebrow="Engineering Highlights"
          title="Beyond building screens."
          description="Three-to-five years in, the work is less about drawing UI and more about the architecture, performance and release discipline that keep it shipping."
        />

        <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" gap={0.06}>
          {engineeringHighlights.map((item) => {
            const Icon = iconByTitle[item.title] ?? Wrench;
            return (
              <StaggerItem key={item.title} as="article" className="card card-hover p-6">
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
