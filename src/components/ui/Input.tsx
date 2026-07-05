import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export function Input({ className, label, error, hint, id, ...props }: InputProps) {
  return (
    <label className="block space-y-2">
      {label ? <span className="text-sm font-medium text-[var(--text-main)]">{label}</span> : null}
      <input
        id={id}
        className={cn(
          "transition-smooth w-full rounded-xl border border-[rgba(6,59,76,0.1)] bg-[var(--surface-admin)] px-4 py-3 text-sm text-[var(--text-main)] shadow-sm outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--ocean)] focus:ring-4 focus:ring-[rgba(94,211,208,0.18)]",
          error && "border-[rgba(255,122,89,0.5)] focus:border-[var(--coral)] focus:ring-[rgba(255,122,89,0.16)]",
          className
        )}
        {...props}
      />
      {error ? <span className="text-sm text-[var(--coral)]">{error}</span> : null}
      {!error && hint ? <span className="text-sm text-[var(--text-muted)]">{hint}</span> : null}
    </label>
  );
}
