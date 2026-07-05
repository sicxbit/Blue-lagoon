import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "admin";
type ButtonSize = "sm" | "md" | "lg";

export function buttonStyles({
  variant = "primary",
  size = "md",
  fullWidth = false,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}) {
  return cn(
    "pressable soft-hover wave-button transition-smooth inline-flex items-center justify-center rounded-xl font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--aqua)] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60",
    size === "sm" && "px-3.5 py-2 text-sm",
    size === "md" && "px-4 py-2.5 text-sm",
    size === "lg" && "px-5 py-3 text-base",
    fullWidth && "w-full",
    variant === "primary" && "ocean-button hover:brightness-105",
    variant === "secondary" && "sand-button hover:bg-[rgba(244,227,193,0.98)]",
    variant === "ghost" && "border border-transparent bg-[rgba(255,255,255,0.18)] text-[var(--ocean-deep)] hover:bg-[rgba(8,126,139,0.08)]",
    variant === "danger" && "bg-[rgba(255,122,89,0.12)] text-[var(--coral)] hover:bg-[rgba(255,122,89,0.2)]",
    variant === "admin" && "glass-panel-dark hover:bg-[rgba(6,59,76,0.62)]"
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

export function Button({
  className,
  variant,
  size,
  fullWidth,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonStyles({ variant, size, fullWidth }), className)}
      {...props}
    />
  );
}
