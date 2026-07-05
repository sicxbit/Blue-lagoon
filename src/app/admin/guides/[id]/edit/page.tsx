import { notFound } from "next/navigation";
import { AdminEntityForm, type AdminFormField } from "@/components/admin/AdminEntityForm";
import { guides } from "@/lib/data/guides";

const guideFields: AdminFormField[] = [
  { name: "name", label: "Name", type: "text" },
  { name: "location", label: "Location", type: "text" },
  { name: "languages", label: "Languages", type: "textarea", hint: "One line per language." },
  { name: "image", label: "Image path", type: "text" },
  { name: "rating", label: "Rating", type: "number" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "email", label: "Email", type: "email" },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: [
      { label: "Draft", value: "draft" },
      { label: "Published", value: "published" },
    ],
  },
  { name: "specialties", label: "Specialties", type: "textarea", hint: "One line per specialty." },
  { name: "bio", label: "Bio", type: "textarea" },
];

export default async function EditAdminGuidePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = guides.find((guide) => guide.id === id);

  if (!item) {
    notFound();
  }

  return (
    <AdminEntityForm
      title={`Edit guide: ${item.name}`}
      description="Refine guide bios, specialties, and contact information for future operations use."
      backHref="/admin/guides"
      fields={guideFields}
      initialValues={{
        name: item.name,
        location: item.location,
        languages: item.languages.join("\n"),
        image: item.image,
        rating: String(item.rating),
        phone: item.phone ?? "",
        email: item.email ?? "",
        status: item.status,
        specialties: item.specialties.join("\n"),
        bio: item.bio,
      }}
    />
  );
}
