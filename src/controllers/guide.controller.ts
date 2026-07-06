import { getGuidesByIds, getPublishedGuides } from "@/services/guide.service";

export function getHomepageGuides(limit = 2) {
  return getPublishedGuides().slice(0, limit);
}

export function getPublishedGuideCount() {
  return getPublishedGuides().length;
}

export function getPackageGuides(ids: string[]) {
  return getGuidesByIds(ids);
}
