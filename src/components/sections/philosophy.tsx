import { philosophy } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";

export function Philosophy() {
  return (
    <section id="philosophy" className="section border-t border-border/50">
      <div className="container">
        <SectionHeading
          index="08 / "
          eyebrow="How I Work"
          title="Development philosophy."
        />

        <Stagger className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3" gap={0.06}>
          {philosophy.map((item, i) => (
            <StaggerItem key={item.title} className="border-t border-border pt-6">
              <span className="font-mono text-3xl text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{item.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
