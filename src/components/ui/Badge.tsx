import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "default" | "accent" | "success" | "warning" | "danger";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "transition-smooth inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
        variant === "default" && "bg-[rgba(8,126,139,0.12)] text-[var(--ocean-deep)]",
        variant === "accent" && "bg-[rgba(246,200,95,0.28)] text-[var(--ocean-deep)]",
        variant === "success" && "bg-[rgba(94,211,208,0.24)] text-[var(--ocean-deep)]",
        variant === "warning" && "bg-[rgba(246,200,95,0.22)] text-[var(--ocean-deep)]",
        variant === "danger" && "bg-[rgba(255,122,89,0.18)] text-[var(--coral)]",
        className
      )}
      {...props}
    />
  );
}
