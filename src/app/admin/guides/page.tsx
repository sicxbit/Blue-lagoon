import { AdminCollectionTable } from "@/components/admin/AdminCollectionTable";
import { guides } from "@/lib/data/guides";

export default function AdminGuidesPage() {
  return (
    <AdminCollectionTable
      title="Guides"
      description="Keep local hosts, language coverage, and specialties organized for trip planning."
      rows={guides.map((item) => ({
        id: item.id,
        title: item.name,
        description: item.bio,
        status: item.status,
        details: [item.location, item.languages.join(", "), `${item.rating.toFixed(1)} stars`],
        editHref: `/admin/guides/${item.id}/edit`,
      }))}
      newHref="/admin/guides/new"
      searchPlaceholder="Search guides by name, location, or language"
      emptyTitle="No guides found"
      emptyDescription="Try another search term or add a new guide profile."
    />
  );
}
