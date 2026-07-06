import { hotels } from "@/lib/data/hotels";

export function getStays() {
  return hotels;
}

export function getPublishedStays() {
  return hotels.filter((item) => item.status === "published");
}

export function getStaysByIds(ids: string[]) {
  return hotels.filter((item) => ids.includes(item.id));
}
