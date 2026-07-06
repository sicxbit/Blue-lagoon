export type PackageStatus = "draft" | "published";

export interface PackageItineraryDay {
  day: number;
  title: string;
  description: string;
  activities?: string[];
}

export interface Package {
  id: string;
  title: string;
  slug: string;
  destination: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  groupSize: string;
  featured: boolean;
  status: PackageStatus;
  highlights: string[];
  description: string;
  itinerary: PackageItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  hotels: string[];
  guides: string[];
  gettingThere?: string;
  accommodation?: string;
  meals?: string;
  importantNotes?: string[];
}
