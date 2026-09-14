import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Reveal>
        <span className="eyebrow">
          {index && <span className="text-faint">{index}</span>}
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="section-title mt-4">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="lede mt-4 text-base leading-relaxed sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
