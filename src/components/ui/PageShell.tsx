import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PageShellProps {
  children: ReactNode;
  className?: string;
  width?: "default" | "wide" | "narrow";
}

export function PageShell({ children, className, width = "default" }: PageShellProps) {
  return (
    <div
      className={cn(
        "page-enter mx-auto w-full px-5 sm:px-6 lg:px-8",
        width === "narrow" && "max-w-4xl",
        width === "default" && "max-w-7xl",
        width === "wide" && "max-w-[88rem]",
        className
      )}
    >
      {children}
    </div>
  );
}
