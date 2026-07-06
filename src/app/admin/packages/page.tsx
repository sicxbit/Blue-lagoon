import { AdminCollectionTable } from "@/components/admin/AdminCollectionTable";
import { formatInr } from "@/lib/currency";
import { packages } from "@/lib/data/packages";

export default function AdminPackagesPage() {
  return (
    <AdminCollectionTable
      title="Packages"
      description="Manage Lakshadweep package offers, itinerary status, and featured marketplace visibility."
      rows={packages.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        status: item.status,
        featured: item.featured,
        details: [item.destination, item.duration, formatInr(item.price), item.groupSize],
        editHref: `/admin/packages/${item.id}/edit`,
      }))}
      newHref="/admin/packages/new"
      searchPlaceholder="Search packages by title, destination, or status"
      emptyTitle="No packages found"
      emptyDescription="Try a different search term or add a new package."
    />
  );
}
