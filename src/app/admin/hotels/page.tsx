import { AdminCollectionTable } from "@/components/admin/AdminCollectionTable";
import { hotels } from "@/lib/data/hotels";

export default function AdminHotelsPage() {
  return (
    <AdminCollectionTable
      title="Hotels & Stays"
      description="Curate the stay inventory used across package detail pages and admin planning."
      rows={hotels.map((item) => ({
        id: item.id,
        title: item.name,
        description: item.description,
        status: item.status,
        details: [item.location, item.type, `${item.rating.toFixed(1)} stars`, item.priceRange],
        editHref: `/admin/hotels/${item.id}/edit`,
      }))}
      newHref="/admin/hotels/new"
      searchPlaceholder="Search stays by name, location, or type"
      emptyTitle="No stays found"
      emptyDescription="Try adjusting the search or create a new stay record."
    />
  );
}
