export type StayType =
  | "hotel"
  | "resort"
  | "homestay"
  | "villa"
  | "houseboat";

export interface Stay {
  id: string;
  name: string;
  location: string;
  type: StayType;
  image: string;
  rating: number;
  description: string;
  amenities: string[];
  priceRange: string;
  status: "draft" | "published";
}
