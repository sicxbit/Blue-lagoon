import type { ReactNode } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminLogoutButton } from "@/components/admin/AdminLogoutButton";
import { requireAdminSession } from "@/lib/auth";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await requireAdminSession();

  return (
    <div className="bg-beach-app min-h-screen">
      <div className="mx-auto grid min-h-screen max-w-[92rem] gap-6 px-4 py-4 lg:grid-cols-[290px_1fr] lg:px-6 lg:py-6">
        <div className="lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
          <AdminSidebar />
        </div>

        <div className="stagger-children space-y-6">
          <header className="glass-panel-strong page-enter flex flex-col gap-4 rounded-[32px] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--ocean)]">Vendor control center</p>
              <h1 className="mt-1 font-display text-4xl leading-none text-[var(--ocean-deep)]">Vendor Workspace</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="glass-panel rounded-2xl px-4 py-2 text-sm text-[var(--text-main)]">
                Signed in as <span className="font-semibold text-[var(--ocean-deep)]">{session.email}</span>
              </div>
              <AdminLogoutButton />
            </div>
          </header>

          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
