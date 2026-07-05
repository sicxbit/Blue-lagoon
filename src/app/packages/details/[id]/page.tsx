import { notFound } from "next/navigation";
import { getTourById } from "@/lib/tours";
import TourPackageDetail from "../../TourPackageDetails";

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tour = getTourById(id);

  if (!tour) {
    notFound();
  }

  return <TourPackageDetail tour={tour} />;
}
