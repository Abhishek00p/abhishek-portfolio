import { valueProps } from "@/data/site";
import { Stagger, StaggerItem } from "@/components/ui/reveal";

export function ValueProps() {
  return (
    <section aria-label="What I bring" className="relative border-y border-border/50 bg-surface-1/30">
      <div className="container py-10 sm:py-12">
        <Stagger className="grid grid-cols-1 gap-px overflow-hidden rounded-lg sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((v) => (
            <StaggerItem
              key={v.title}
              className="group relative bg-canvas/0 p-1"
            >
              <div className="h-full rounded-lg p-5 transition-colors duration-300 hover:bg-surface-2/40">
                <h3 className="font-display text-base font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
