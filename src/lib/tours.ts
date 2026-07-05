import { getPackageById, packages, type TravelPackage } from "@/lib/data/packages";

export type TourPackage = TravelPackage;

export const tours = packages;

export function getTourById(id: string): TourPackage | undefined {
  return getPackageById(id);
}
