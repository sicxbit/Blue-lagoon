import { getPublishedStays, getStaysByIds } from "@/services/stay.service";

export function getHomepageStays(limit = 3) {
  return getPublishedStays().slice(0, limit);
}

export function getPublishedStayCount() {
  return getPublishedStays().length;
}

export function getPackageStays(ids: string[]) {
  return getStaysByIds(ids);
}
