import { guides } from "@/lib/data/guides";

export function getGuides() {
  return guides;
}

export function getPublishedGuides() {
  return guides.filter((item) => item.status === "published");
}

export function getGuidesByIds(ids: string[]) {
  return guides.filter((item) => ids.includes(item.id));
}
