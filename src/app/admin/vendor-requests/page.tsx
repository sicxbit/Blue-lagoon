import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { AdminVendorRequestsTable } from "@/components/admin/AdminVendorRequestsTable";
import { requireAdminSession } from "@/lib/auth";
import { getVendorRequestsForAdmin } from "@/controllers/vendor-request.controller";

export default async function AdminVendorRequestsPage() {
  await requireAdminSession();
  const requests = getVendorRequestsForAdmin();
  const pendingCount = requests.filter((request) => request.status === "pending").length;

  return (
    <div className="space-y-6">
      <Card variant="admin" className="space-y-4">
        <Badge variant="accent" className="sun-badge">
          Admin approvals
        </Badge>
        <div className="space-y-2">
          <h2 className="font-display text-4xl leading-none text-[var(--ocean-deep)]">Vendor onboarding queue</h2>
          <p className="max-w-3xl text-sm leading-7 text-[var(--text-muted)]">
            Review Join as vendor submissions here. Approving a request immediately enables that vendor email and password for workspace access.
          </p>
        </div>
        <div className="glass-panel rounded-[28px] border border-[var(--border-soft)] px-5 py-4 text-sm text-[var(--text-main)]">
          Pending requests right now: <span className="font-semibold text-[var(--ocean-deep)]">{pendingCount}</span>
        </div>
      </Card>

      <AdminVendorRequestsTable requests={requests} />
    </div>
  );
}
