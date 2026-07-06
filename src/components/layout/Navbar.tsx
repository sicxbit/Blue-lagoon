"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { isPathActive } from "@/controllers/navigation.controller";
import { Button, buttonStyles } from "@/components/ui/Button";
import type { NavItem } from "@/lib/navigation";
import { cn } from "@/lib/cn";

interface NavbarProps {
  navigationItems: NavItem[];
  mode?: "transparent" | "solid";
}

export default function Navbar({ navigationItems, mode = "solid" }: NavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (mode === "solid") {
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mode, pathname]);

  const isSolid = mode === "solid" || scrolled;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8 xl:px-10">
      <div
        className={cn(
          "transition-smooth mx-auto flex w-full max-w-[1320px] items-center justify-between rounded-full border px-5 py-3",
          isSolid
            ? "glass-nav"
            : "border-white/22 bg-[rgba(3,59,74,0.42)] shadow-[0_16px_36px_rgba(6,59,76,0.22)] backdrop-blur-[18px]"
        )}
      >
        <Link
          href="/"
          className={cn(
            "brand-logo transition-smooth font-display text-2xl font-semibold tracking-[0.1em]",
            isSolid ? "drop-shadow-[0_1px_10px_rgba(3,59,74,0.12)]" : "brand-logo-inverse"
          )}
        >
          Blue Lagoon
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navigationItems.map((item) => {
            const active = isPathActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                style={!isSolid ? { color: "#ffffff" } : undefined}
                className={cn(
                  "wave-link transition-smooth rounded-full px-4 py-2 text-sm font-medium",
                  active
                    ? isSolid
                      ? "bg-[rgba(8,126,139,0.16)] text-[var(--ocean-deep)]"
                      : "bg-white/12 text-white shadow-[0_1px_14px_rgba(3,59,74,0.18)]"
                    : isSolid
                      ? "text-[var(--text-main)] hover:bg-[rgba(8,126,139,0.1)] hover:text-[var(--ocean-deep)]"
                      : "text-white hover:bg-white/10 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <Link href="/signup" className={buttonStyles({ variant: "primary", size: "sm" })}>
            Join as vendor
          </Link>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className={cn("md:hidden", !isSolid && "text-white hover:bg-white/10")}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {menuOpen ? (
        <div className="glass-panel-strong fade-in mx-auto mt-3 max-w-7xl rounded-[28px] p-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navigationItems.map((item) => {
              const active = isPathActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "wave-link wave-link-calm rounded-2xl px-4 py-3 text-sm font-medium transition",
                    active
                      ? "bg-[rgba(8,126,139,0.12)] text-[var(--ocean-deep)]"
                      : "text-[var(--text-main)] hover:bg-[rgba(8,126,139,0.08)]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className={buttonStyles({ variant: "primary", size: "md", fullWidth: true })}
            >
              Join as vendor
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
