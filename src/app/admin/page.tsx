import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { guides } from "@/lib/data/guides";
import { hotels } from "@/lib/data/hotels";
import { packages } from "@/lib/data/packages";

const stats = [
  {
    label: "Total Packages",
    value: packages.length,
    helper: `${packages.filter((item) => item.status === "published").length} published`,
  },
  {
    label: "Hotels / Stays",
    value: hotels.length,
    helper: `${hotels.filter((item) => item.status === "published").length} published`,
  },
  {
    label: "Guides",
    value: guides.length,
    helper: `${guides.filter((item) => item.status === "published").length} published`,
  },
  {
    label: "Featured Packages",
    value: packages.filter((item) => item.featured).length,
    helper: "Ocean hero placements",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <Card variant="admin" className="space-y-4">
          <Badge variant="accent" className="sun-badge">
            Demo dashboard
          </Badge>
        <div className="space-y-2">
          <h2 className="font-display text-4xl leading-none text-[var(--ocean-deep)]">Content overview</h2>
          <p className="max-w-2xl text-sm leading-7 text-[var(--text-muted)]">
            Use this lightweight admin foundation to stage package, hotel, and guide changes before wiring a real API.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/packages/new" className={buttonStyles({ variant: "admin", size: "md" })}>
            New package
          </Link>
          <Link href="/admin/hotels/new" className={buttonStyles({ variant: "secondary", size: "md" })}>
            New stay
          </Link>
          <Link href="/admin/guides/new" className={buttonStyles({ variant: "secondary", size: "md" })}>
            New guide
          </Link>
        </div>
      </Card>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} variant="admin" className="soft-hover space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">{stat.label}</p>
            <p className="text-4xl font-semibold text-[var(--ocean-deep)]">{stat.value}</p>
            <p className="text-sm text-[var(--text-muted)]">{stat.helper}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <Card variant="admin" className="space-y-4">
          <h3 className="text-xl font-semibold text-[var(--ocean-deep)]">Next persistence TODOs</h3>
          <ul className="space-y-3 text-sm leading-7 text-[var(--text-muted)]">
            <li>TODO: add API routes for create, update, and delete operations.</li>
            <li>TODO: replace local arrays with a database-backed content layer.</li>
            <li>TODO: store audit metadata for draft and publish actions.</li>
          </ul>
        </Card>

        <Card variant="admin" className="space-y-4 xl:col-span-2">
          <h3 className="text-xl font-semibold text-[var(--ocean-deep)]">Recently staged content</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {packages.slice(0, 4).map((item) => (
              <div key={item.id} className="glass-panel soft-hover rounded-2xl border border-[var(--border-soft)] p-4">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-semibold text-[var(--ocean-deep)]">{item.title}</h4>
                  <Badge variant={item.status === "published" ? "success" : "warning"}>{item.status}</Badge>
                </div>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  {item.destination} | {item.duration} | ${item.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
