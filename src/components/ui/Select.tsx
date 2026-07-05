import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export function Select({ className, label, error, hint, children, ...props }: SelectProps) {
  return (
    <label className="block space-y-2">
      {label ? <span className="text-sm font-medium text-[var(--text-main)]">{label}</span> : null}
      <select
        className={cn(
          "w-full rounded-xl border border-[var(--border-soft)] bg-white px-4 py-3 text-sm text-[var(--text-main)] shadow-sm outline-none transition focus:border-[var(--ocean)] focus:ring-4 focus:ring-[rgba(94,211,208,0.18)]",
          error && "border-[rgba(255,122,89,0.5)] focus:border-[var(--coral)] focus:ring-[rgba(255,122,89,0.16)]",
          className
        )}
        {...props}
      >
        {children}
      </select>
      {error ? <span className="text-sm text-[var(--coral)]">{error}</span> : null}
      {!error && hint ? <span className="text-sm text-[var(--text-muted)]">{hint}</span> : null}
    </label>
  );
}
