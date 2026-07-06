import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type CardVariant = "default" | "glass" | "admin" | "premium" | "section";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

export function Card({ className, variant = "default", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] p-6 md:p-7",
        variant === "default" && "surface-card",
        variant === "premium" && "",
        variant === "section" && "section-card",
        variant === "glass" && "glass-panel-dark",
        variant === "admin" &&
          "glass-panel-strong rounded-3xl shadow-[0_14px_36px_rgba(6,59,76,0.08)]",
        className
      )}
      {...props}
    />
  );
}
