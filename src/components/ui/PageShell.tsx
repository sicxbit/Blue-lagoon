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
        "page-enter mx-auto w-full max-w-full px-4 sm:px-6 lg:px-10 xl:px-12",
        width === "narrow" && "max-w-4xl",
        width === "default" && "max-w-[1200px]",
        width === "wide" && "max-w-[1320px]",
        className
      )}
    >
      {children}
    </div>
  );
}
