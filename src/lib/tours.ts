import type { Package } from "@/models/package.model";
import { findPackageById, getPackages } from "@/services/package.service";

export type TourPackage = Package;

export const tours = getPackages();

export function getTourById(id: string): TourPackage | undefined {
  return findPackageById(id);
}
