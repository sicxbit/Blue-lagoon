import { notFound } from "next/navigation";
import { getPackageDetailsById } from "@/controllers/package.controller";
import TourPackageDetail from "../../TourPackageDetails";

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tour = getPackageDetailsById(id);

  if (!tour) {
    notFound();
  }

  return <TourPackageDetail tour={tour} />;
}
