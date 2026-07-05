import { AdminEntityForm, type AdminFormField } from "@/components/admin/AdminEntityForm";

const hotelFields: AdminFormField[] = [
  { name: "name", label: "Name", type: "text", placeholder: "Reefline Retreat" },
  { name: "location", label: "Location", type: "text", placeholder: "North Male Atoll, Maldives" },
  {
    name: "type",
    label: "Type",
    type: "select",
    options: [
      { label: "Hotel", value: "hotel" },
      { label: "Resort", value: "resort" },
      { label: "Homestay", value: "homestay" },
      { label: "Villa", value: "villa" },
      { label: "Houseboat", value: "houseboat" },
    ],
  },
  { name: "image", label: "Image path", type: "text", placeholder: "/assets/imgs/banner/1.jpg" },
  { name: "rating", label: "Rating", type: "number", placeholder: "4.8" },
  { name: "priceRange", label: "Price range", type: "text", placeholder: "$$$" },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: [
      { label: "Draft", value: "draft" },
      { label: "Published", value: "published" },
    ],
  },
  { name: "amenities", label: "Amenities", type: "textarea", hint: "One line per amenity." },
  { name: "description", label: "Description", type: "textarea" },
];

export default function NewAdminHotelPage() {
  return (
    <AdminEntityForm
      title="Create stay"
      description="Stage a hotel, resort, or local stay entry for future package association."
      backHref="/admin/hotels"
      fields={hotelFields}
      initialValues={{
        name: "",
        location: "",
        type: "hotel",
        image: "",
        rating: "",
        priceRange: "",
        status: "draft",
        amenities: "",
        description: "",
      }}
    />
  );
}
