import { AdminEntityForm, type AdminFormField } from "@/components/admin/AdminEntityForm";

const packageFields: AdminFormField[] = [
  { name: "title", label: "Title", type: "text", placeholder: "Maldives Lagoon Escape" },
  { name: "slug", label: "Slug", type: "text", placeholder: "maldives-lagoon-escape" },
  { name: "destination", label: "Destination", type: "text", placeholder: "Maldives" },
  { name: "duration", label: "Duration", type: "text", placeholder: "7 Days" },
  { name: "price", label: "Price", type: "number", placeholder: "2499" },
  { name: "rating", label: "Rating", type: "number", placeholder: "4.9" },
  { name: "image", label: "Image path", type: "text", placeholder: "/assets/imgs/banner/1.jpg" },
  { name: "groupSize", label: "Group size", type: "text", placeholder: "2-8 travelers" },
  { name: "featured", label: "Featured package", type: "checkbox", hint: "Highlight this package in key public placements." },
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

export default function NewAdminPackagePage() {
  return (
    <AdminEntityForm
      title="Create package"
      description="Stage a new travel package. This form is demo-only for now and does not persist."
      backHref="/admin/packages"
      fields={packageFields}
      initialValues={{
        title: "",
        slug: "",
        destination: "",
        duration: "",
        price: "",
        rating: "",
        image: "",
        groupSize: "",
        featured: false,
        status: "draft",
        highlights: "",
        description: "",
        inclusions: "",
        exclusions: "",
      }}
    />
  );
}
