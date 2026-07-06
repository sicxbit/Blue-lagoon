import { notFound } from "next/navigation";
import { AdminEntityForm, type AdminFormField } from "@/components/admin/AdminEntityForm";
import { hotels } from "@/lib/data/hotels";

const hotelFields: AdminFormField[] = [
  { name: "name", label: "Name", type: "text" },
  { name: "location", label: "Location", type: "text" },
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
  { name: "image", label: "Image path", type: "text" },
  { name: "rating", label: "Rating", type: "number" },
  { name: "priceRange", label: "Price range (INR)", type: "text" },
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

export default async function EditAdminHotelPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = hotels.find((hotel) => hotel.id === id);

  if (!item) {
    notFound();
  }

  return (
    <AdminEntityForm
      title={`Edit stay: ${item.name}`}
      description="Refine the stay details used in Lakshadweep package recommendations and partner planning."
      backHref="/admin/hotels"
      fields={hotelFields}
      initialValues={{
        name: item.name,
        location: item.location,
        type: item.type,
        image: item.image,
        rating: String(item.rating),
        priceRange: item.priceRange,
        status: item.status,
        amenities: item.amenities.join("\n"),
        description: item.description,
      }}
    />
  );
}
