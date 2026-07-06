import { AdminEntityForm, type AdminFormField } from "@/components/admin/AdminEntityForm";

const hotelFields: AdminFormField[] = [
  { name: "name", label: "Name", type: "text", placeholder: "Agatti Lagoon House" },
  { name: "location", label: "Location", type: "text", placeholder: "Agatti Island, Lakshadweep" },
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
  { name: "priceRange", label: "Price range (INR)", type: "text", placeholder: "₹8,000-₹20,000/night" },
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
      description="Stage a Lakshadweep hotel, resort, or local stay entry for future package association."
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
