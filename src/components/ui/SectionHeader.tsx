import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  actions?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  actions,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-4 md:flex-row md:items-end md:justify-between", align === "center" && "md:flex-col md:items-center md:text-center")}>
      <div className="max-w-3xl space-y-3">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--ocean)]">{eyebrow}</p>
        ) : null}
        <h2 className="font-display text-4xl leading-none text-[var(--ocean-deep)] md:text-5xl">{title}</h2>
        {description ? <p className="text-base leading-7 text-[var(--text-muted)]">{description}</p> : null}
      </div>
      {actions ? <div>{actions}</div> : null}
    </div>
  );
}
