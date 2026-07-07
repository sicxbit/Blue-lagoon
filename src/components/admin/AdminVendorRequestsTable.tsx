"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { VendorRequest } from "@/models/vendor.model";

type AdminVendorRequestsTableProps = {
  requests: VendorRequest[];
};

type ReviewState = {
  loadingId: string | null;
  error: string;
};

function formatTimestamp(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function getBadgeVariant(status: VendorRequest["status"]) {
  if (status === "approved") {
    return "success";
  }

  if (status === "rejected") {
    return "danger";
  }

  return "warning";
}

export function AdminVendorRequestsTable({ requests }: AdminVendorRequestsTableProps) {
  const router = useRouter();
  const [reviewState, setReviewState] = useState<ReviewState>({
    loadingId: null,
    error: "",
  });

  const groupedCounts = useMemo(
    () => ({
      pending: requests.filter((request) => request.status === "pending").length,
      approved: requests.filter((request) => request.status === "approved").length,
      rejected: requests.filter((request) => request.status === "rejected").length,
    }),
    [requests]
  );

  async function reviewRequest(id: string, decision: "approved" | "rejected") {
    setReviewState({
      loadingId: id,
      error: "",
    });

    try {
      const response = await fetch(`/api/admin/vendor-requests/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ decision }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to update vendor request");
      }

      router.refresh();
    } catch (error) {
      setReviewState({
        loadingId: null,
        error: error instanceof Error ? error.message : "Unable to update vendor request",
      });
      return;
    }

    setReviewState({
      loadingId: null,
      error: "",
    });
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-3">
        <Card variant="admin" className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">Pending</p>
          <p className="text-4xl font-semibold text-[var(--ocean-deep)]">{groupedCounts.pending}</p>
          <p className="text-sm text-[var(--text-muted)]">Requests waiting for an admin decision.</p>
        </Card>
        <Card variant="admin" className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">Approved</p>
          <p className="text-4xl font-semibold text-[var(--ocean-deep)]">{groupedCounts.approved}</p>
          <p className="text-sm text-[var(--text-muted)]">Approved vendors can log into the workspace immediately.</p>
        </Card>
        <Card variant="admin" className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ocean)]">Rejected</p>
          <p className="text-4xl font-semibold text-[var(--ocean-deep)]">{groupedCounts.rejected}</p>
          <p className="text-sm text-[var(--text-muted)]">Rejected vendors can submit a fresh request later.</p>
        </Card>
      </div>

      {reviewState.error ? (
        <div className="rounded-3xl border border-[rgba(255,122,89,0.36)] bg-[rgba(255,122,89,0.12)] px-4 py-3 text-sm text-[var(--coral)]">
          {reviewState.error}
        </div>
      ) : null}

      <div className="space-y-4">
        {requests.length ? (
          requests.map((request) => {
            const isBusy = reviewState.loadingId === request.id;

            return (
              <Card key={request.id} variant="admin" className="space-y-4">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-semibold text-[var(--ocean-deep)]">{request.organizationName}</h3>
                      <Badge variant={getBadgeVariant(request.status)}>{request.status}</Badge>
                    </div>
                    <div className="grid gap-2 text-sm text-[var(--text-muted)] md:grid-cols-2">
                      <p>
                        <span className="font-semibold text-[var(--ocean-deep)]">Owner:</span> {request.ownerName}
                      </p>
                      <p>
                        <span className="font-semibold text-[var(--ocean-deep)]">Email:</span> {request.email}
                      </p>
                      <p>
                        <span className="font-semibold text-[var(--ocean-deep)]">Phone:</span> {request.mobileNumber}
                      </p>
                      <p>
                        <span className="font-semibold text-[var(--ocean-deep)]">Submitted:</span> {formatTimestamp(request.createdAt)}
                      </p>
                      {request.category ? (
                        <p>
                          <span className="font-semibold text-[var(--ocean-deep)]">Category:</span> {request.category}
                        </p>
                      ) : null}
                      {request.reviewedAt ? (
                        <p>
                          <span className="font-semibold text-[var(--ocean-deep)]">Reviewed:</span> {formatTimestamp(request.reviewedAt)}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="primary"
                      size="md"
                      disabled={isBusy || request.status === "approved"}
                      onClick={() => reviewRequest(request.id, "approved")}
                    >
                      {isBusy && request.status !== "approved" ? "Saving..." : "Approve"}
                    </Button>
                    <Button
                      variant="danger"
                      size="md"
                      disabled={isBusy || request.status === "rejected"}
                      onClick={() => reviewRequest(request.id, "rejected")}
                    >
                      {isBusy && request.status !== "rejected" ? "Saving..." : "Reject"}
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })
        ) : (
          <Card variant="admin" className="space-y-2">
            <h3 className="text-2xl font-semibold text-[var(--ocean-deep)]">No vendor requests yet</h3>
            <p className="text-sm leading-7 text-[var(--text-muted)]">
              New Join as vendor submissions will appear here for admin approval.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
