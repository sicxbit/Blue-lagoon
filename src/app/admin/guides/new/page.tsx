import { AdminEntityForm, type AdminFormField } from "@/components/admin/AdminEntityForm";

const guideFields: AdminFormField[] = [
  { name: "name", label: "Name", type: "text", placeholder: "Amara Silva" },
  { name: "location", label: "Location", type: "text", placeholder: "Maldives" },
  { name: "languages", label: "Languages", type: "textarea", hint: "One line per language." },
  { name: "image", label: "Image path", type: "text", placeholder: "/assets/imgs/vendor/G1.png" },
  { name: "rating", label: "Rating", type: "number", placeholder: "4.9" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+960 555 0148" },
  { name: "email", label: "Email", type: "email", placeholder: "guide@bluelagoon.travel" },
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

export default function NewAdminGuidePage() {
  return (
    <AdminEntityForm
      title="Create guide"
      description="Stage a guide profile with specialties and language coverage."
      backHref="/admin/guides"
      fields={guideFields}
      initialValues={{
        name: "",
        location: "",
        languages: "",
        image: "",
        rating: "",
        phone: "",
        email: "",
        status: "draft",
        specialties: "",
        bio: "",
      }}
    />
  );
}
