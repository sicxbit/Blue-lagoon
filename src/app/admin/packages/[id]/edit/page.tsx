import { notFound } from "next/navigation";
import { AdminEntityForm, type AdminFormField } from "@/components/admin/AdminEntityForm";
import { getPackageById } from "@/lib/data/packages";

const packageFields: AdminFormField[] = [
  { name: "title", label: "Title", type: "text" },
  { name: "slug", label: "Slug", type: "text" },
  { name: "destination", label: "Destination", type: "text" },
  { name: "duration", label: "Duration", type: "text" },
  { name: "price", label: "Price", type: "number" },
  { name: "rating", label: "Rating", type: "number" },
  { name: "image", label: "Image path", type: "text" },
  { name: "groupSize", label: "Group size", type: "text" },
  { name: "featured", label: "Featured package", type: "checkbox", hint: "Show this package in prime marketing spots." },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: [
      { label: "Draft", value: "draft" },
      { label: "Published", value: "published" },
    ],
  },
  { name: "highlights", label: "Highlights", type: "textarea", hint: "One line per highlight." },
  { name: "description", label: "Description", type: "textarea" },
  { name: "inclusions", label: "Inclusions", type: "textarea", hint: "One line per inclusion." },
  { name: "exclusions", label: "Exclusions", type: "textarea", hint: "One line per exclusion." },
];

export default async function EditAdminPackagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getPackageById(id);

  if (!item) {
    notFound();
  }

  return (
    <AdminEntityForm
      title={`Edit package: ${item.title}`}
      description="Adjust the package metadata, marketing copy, and visibility state."
      backHref="/admin/packages"
      fields={packageFields}
      initialValues={{
        title: item.title,
        slug: item.slug,
        destination: item.destination,
        duration: item.duration,
        price: String(item.price),
        rating: String(item.rating),
        image: item.image,
        groupSize: item.groupSize,
        featured: item.featured,
        status: item.status,
        highlights: item.highlights.join("\n"),
        description: item.description,
        inclusions: item.inclusions.join("\n"),
        exclusions: item.exclusions.join("\n"),
      }}
    />
  );
}
