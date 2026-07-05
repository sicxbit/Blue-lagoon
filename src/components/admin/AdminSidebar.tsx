"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Map, Hotel, Users, ArrowUpRight } from "lucide-react";
import { adminNavigation } from "@/lib/navigation";
import { cn } from "@/lib/cn";

const icons = {
  "/admin": LayoutDashboard,
  "/admin/packages": Map,
  "/admin/hotels": Hotel,
  "/admin/guides": Users,
} as const;

export function AdminSidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/admin") {
      return pathname === "/admin";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <aside className="glass-panel-dark page-enter rounded-[32px] p-6 text-white shadow-[0_24px_60px_rgba(6,59,76,0.2)]">
      <div className="space-y-3 border-b border-white/10 pb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--sun)]">Admin</p>
        <div>
          <h2 className="brand-logo brand-logo-inverse font-display text-4xl leading-none">Blue Lagoon</h2>
          <p className="mt-2 text-sm text-white/68">Manage packages, stays, and guides in demo mode.</p>
        </div>
      </div>

      <nav className="mt-6 space-y-2">
        {adminNavigation.map((item) => {
          const active = isActive(item.href);
          const Icon = icons[item.href as keyof typeof icons] ?? LayoutDashboard;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "soft-hover transition-smooth flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium",
                active
                  ? "bg-[rgba(244,227,193,0.92)] text-[var(--ocean-deep)] shadow-[0_12px_24px_rgba(6,59,76,0.12)]"
                  : "text-white/88 hover:bg-[rgba(255,255,255,0.12)] hover:text-white"
              )}
            >
              <Icon className={cn("h-4 w-4", active ? "text-[var(--ocean-deep)]" : "text-white")} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/"
        className="soft-hover transition-smooth mt-8 inline-flex items-center gap-2 rounded-2xl border border-white/16 bg-white/10 px-4 py-3 text-sm font-medium text-white hover:bg-white/16 hover:text-white"
      >
        View public site
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </aside>
  );
}
