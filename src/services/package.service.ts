import { getPackageById, getPackageBySlug, packages } from "@/lib/data/packages";

export function getPackages() {
  return packages;
}

export function getPublishedPackages() {
  return packages.filter((item) => item.status === "published");
}

export function getFeaturedPackages() {
  return packages.filter((item) => item.featured && item.status === "published");
}

export function findPackageById(id: string) {
  return getPackageById(id);
}

export function findPackageBySlug(slug: string) {
  return getPackageBySlug(slug);
}
