import { findPackageById, findPackageBySlug, getFeaturedPackages, getPublishedPackages } from "@/services/package.service";

export function getHomepageFeaturedPackages(limit = 3) {
  return getFeaturedPackages().slice(0, limit);
}

export function getPublishedPackageCount() {
  return getPublishedPackages().length;
}

export function searchPublishedPackages(query: string) {
  const normalizedQuery = query.trim().toLowerCase();
  const publishedPackages = getPublishedPackages();

  if (!normalizedQuery) {
    return publishedPackages;
  }

  return publishedPackages.filter((item) =>
    [item.title, item.destination, item.description, item.status].join(" ").toLowerCase().includes(normalizedQuery)
  );
}

export function getPackageDetailsById(id: string) {
  return findPackageById(id);
}

export function getPackageDetailsBySlug(slug: string) {
  return findPackageBySlug(slug);
}
