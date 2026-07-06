"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button, buttonStyles } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export interface AdminCollectionRow {
  id: string;
  title: string;
  description: string;
  status: "draft" | "published";
  featured?: boolean;
  details: string[];
  editHref: string;
}

interface AdminCollectionTableProps {
  title: string;
  description: string;
  rows: AdminCollectionRow[];
  newHref: string;
  searchPlaceholder: string;
  emptyTitle: string;
  emptyDescription: string;
}

export function AdminCollectionTable({
  title,
  description,
  rows,
  newHref,
  searchPlaceholder,
  emptyTitle,
  emptyDescription,
}: AdminCollectionTableProps) {
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");

  const filteredRows = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return rows;
    }

    return rows.filter((row) =>
      [row.title, row.description, row.status, ...row.details].join(" ").toLowerCase().includes(normalized)
    );
  }, [query, rows]);

  return (
    <div className="space-y-6">
      <Card variant="admin" className="space-y-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <h1 className="font-display text-4xl leading-none text-[var(--ocean-deep)]">{title}</h1>
            <p className="max-w-2xl text-sm leading-7 text-[var(--text-muted)]">{description}</p>
          </div>
          <Link href={newHref} className={buttonStyles({ variant: "admin", size: "md" })}>
            <Plus className="mr-2 h-4 w-4" />
            New item
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,420px)_1fr]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
            <Input
              aria-label={searchPlaceholder}
              placeholder={searchPlaceholder}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="pl-11"
            />
          </div>
          <div className="glass-panel-strong rounded-2xl border border-dashed border-[var(--border-soft)] px-4 py-3 text-sm text-[var(--text-muted)]">
            Demo mode is enabled. Search, edit, and delete are UI-only until an API and database are added.
          </div>
        </div>

        {notice ? (
          <div className="rounded-2xl border border-[rgba(246,200,95,0.4)] bg-[rgba(246,200,95,0.16)] px-4 py-3 text-sm text-[var(--ocean-deep)]">
            {notice}
          </div>
        ) : null}
      </Card>

      {filteredRows.length ? (
        <div className="space-y-4">
          {filteredRows.map((row) => (
            <Card key={row.id} variant="admin" className="soft-hover space-y-4">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-semibold text-[var(--ocean-deep)]">{row.title}</h2>
                    <Badge variant={row.status === "published" ? "success" : "warning"}>{row.status}</Badge>
                    {row.featured ? <Badge variant="accent">Featured</Badge> : null}
                  </div>
                  <p className="max-w-3xl text-sm leading-7 text-[var(--text-muted)]">{row.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {row.details.map((detail) => (
                      <span
                        key={detail}
                        className="rounded-full bg-[rgba(8,126,139,0.08)] px-3 py-1 text-xs font-medium text-[var(--ocean-deep)]"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link href={row.editHref} className={buttonStyles({ variant: "secondary", size: "sm" })}>
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit
                  </Link>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => setNotice(`Delete for "${row.title}" is a preview action only. TODO: connect this to a real API delete flow.`)}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card variant="admin" className="text-center">
          <h2 className="text-2xl font-semibold text-[var(--ocean-deep)]">{emptyTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{emptyDescription}</p>
        </Card>
      )}
    </div>
  );
}
