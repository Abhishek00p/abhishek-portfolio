import { skillGroups } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";

export function Skills() {
  return (
    <section id="skills" className="section border-t border-border/50">
      <div className="container">
        <SectionHeading
          index="02 / "
          eyebrow="Technical Skills"
          title="The stack I build with."
          description="Grouped the way I actually use them in production — every item here is drawn from shipped work, not a wishlist."
        />

        <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" gap={0.06}>
          {skillGroups.map((group) => (
            <StaggerItem key={group.label} as="article" className="card card-hover p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="chip chip-interactive">
                    {skill}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
