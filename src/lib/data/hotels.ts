export type StayType =
  | "hotel"
  | "resort"
  | "homestay"
  | "villa"
  | "houseboat";

export interface HotelStay {
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

export const hotels: HotelStay[] = [
  {
    id: "stay-reef-retreat",
    name: "Reefline Retreat",
    location: "North Male Atoll, Maldives",
    type: "resort",
    image: "/assets/imgs/banner/1.jpg",
    rating: 4.9,
    description: "Overwater villas, reef access, and calm sunset decks for slow luxury escapes.",
    amenities: ["Private plunge pool", "Lagoon spa", "Sunset dining", "Airport speedboat"],
    priceRange: "$$$$",
    status: "published",
  },
  {
    id: "stay-sand-cove",
    name: "Sand Cove House",
    location: "Paros, Greece",
    type: "villa",
    image: "/assets/imgs/banner/2.jpg",
    rating: 4.8,
    description: "A sea-view villa with whitewashed terraces and curated local breakfasts.",
    amenities: ["Sea-view terrace", "Private host", "Cycladic breakfast", "Transfer desk"],
    priceRange: "$$$",
    status: "published",
  },
  {
    id: "stay-lagoon-haven",
    name: "Lagoon Haven",
    location: "Kochi Backwaters, India",
    type: "houseboat",
    image: "/assets/imgs/banner/3.jpg",
    rating: 4.7,
    description: "A polished houseboat stay with chef-led dinners and still-water mornings.",
    amenities: ["Private deck", "Chef dinner", "Sunrise cruise", "Air-conditioned suites"],
    priceRange: "$$$",
    status: "published",
  },
  {
    id: "stay-coral-view",
    name: "Coral View Suites",
    location: "Bali, Indonesia",
    type: "hotel",
    image: "/assets/imgs/banner/4.jpg",
    rating: 4.6,
    description: "Design-forward suites close to the shore with an easy base for island hopping.",
    amenities: ["Infinity pool", "Breakfast included", "Harbor pickup", "Beach club access"],
    priceRange: "$$",
    status: "published",
  },
  {
    id: "stay-sun-tide",
    name: "Sun Tide Homestay",
    location: "Goa, India",
    type: "homestay",
    image: "/assets/imgs/banner/5.jpg",
    rating: 4.5,
    description: "Warm local hosting near hidden coves and early morning fishing villages.",
    amenities: ["Local breakfast", "Bike rentals", "Host-guided walks", "Wi-Fi"],
    priceRange: "$$",
    status: "draft",
  },
];
