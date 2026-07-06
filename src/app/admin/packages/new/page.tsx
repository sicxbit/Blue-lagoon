import { AdminEntityForm, type AdminFormField } from "@/components/admin/AdminEntityForm";

const packageFields: AdminFormField[] = [
  { name: "title", label: "Title", type: "text", placeholder: "Agatti Lagoon Escape" },
  { name: "slug", label: "Slug", type: "text", placeholder: "agatti-lagoon-escape" },
  { name: "destination", label: "Destination", type: "text", placeholder: "Agatti Island, Lakshadweep" },
  { name: "duration", label: "Duration", type: "text", placeholder: "7 Days" },
  { name: "price", label: "Starting price (INR)", type: "number", placeholder: "74999" },
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
      title="Create package listing"
      description="Stage a new Lakshadweep package offer. This form is preview-only for now and does not persist."
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
