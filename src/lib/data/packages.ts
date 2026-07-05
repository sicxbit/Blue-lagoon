export interface PackageItineraryDay {
  day: number;
  title: string;
  description: string;
  activities?: string[];
}

export interface TravelPackage {
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
  status: "draft" | "published";
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

export const packages: TravelPackage[] = [
  {
    id: "1",
    title: "Maldives Lagoon Escape",
    slug: "maldives-lagoon-escape",
    destination: "Maldives",
    duration: "7 Days",
    price: 2499,
    rating: 4.9,
    reviews: 234,
    image: "/assets/imgs/banner/1.jpg",
    groupSize: "2-8 travelers",
    featured: true,
    status: "published",
    highlights: [
      "Overwater villa arrival",
      "Private reef snorkeling session",
      "Sunset sandbank dinner",
      "Spa ritual for two",
    ],
    description:
      "A polished island itinerary designed around turquoise lagoons, gentle service, and generous time to unwind without rushing between activities.",
    itinerary: [
      { day: 1, title: "Arrival to the atoll", description: "Speedboat transfer, villa check-in, and a slow evening welcome dinner by the water." },
      { day: 2, title: "Reef and lagoon day", description: "Private snorkeling with a marine guide followed by a floating breakfast and free time." },
      { day: 3, title: "Island leisure", description: "Spa access, paddleboarding, and an optional sunset photography cruise." },
    ],
    inclusions: ["Luxury stay", "Breakfast and dinner", "Airport transfer", "Guided reef excursion"],
    exclusions: ["International flights", "Travel insurance", "Personal shopping"],
    hotels: ["stay-reef-retreat"],
    guides: ["guide-amara"],
    gettingThere: "Fly into Male and connect by coordinated speedboat transfer.",
    accommodation: "Beach villa upgrade available on request.",
    meals: "Daily breakfast, three curated dinners, and one sandbank experience.",
    importantNotes: ["Best booked 45 days in advance during high season."],
  },
  {
    id: "2",
    title: "Paros Sun & Sail Week",
    slug: "paros-sun-sail-week",
    destination: "Greece",
    duration: "6 Days",
    price: 1899,
    rating: 4.8,
    reviews: 456,
    image: "/assets/imgs/banner/2.jpg",
    groupSize: "2-6 travelers",
    featured: true,
    status: "published",
    highlights: [
      "Cycladic villa stay",
      "Catamaran coastline cruise",
      "Village tasting trail",
      "Golden-hour harbor dining",
    ],
    description:
      "A relaxed island-hopping style trip with clean design hotels, clear-water swims, and unhurried evenings through harbor towns.",
    itinerary: [
      { day: 1, title: "Island check-in", description: "Settle into your sea-view villa and enjoy a terrace aperitif." },
      { day: 2, title: "Sailing day", description: "Board a catamaran for quiet coves, swimming stops, and onboard lunch." },
      { day: 3, title: "Village culture", description: "Explore local lanes, artisan shops, and sunset dining with your guide." },
    ],
    inclusions: ["Boutique villa stay", "Breakfast", "Sailing day", "Private guide touchpoints"],
    exclusions: ["Flights", "Alcoholic beverages", "Optional spa sessions"],
    hotels: ["stay-sand-cove"],
    guides: ["guide-elias"],
    gettingThere: "Arrive via Athens and regional ferry or flight connection.",
    accommodation: "Private suites with sea-facing terraces.",
    meals: "Breakfast daily plus one hosted lunch and one harbor dinner.",
  },
  {
    id: "3",
    title: "Kerala Backwater Slow Journey",
    slug: "kerala-backwater-slow-journey",
    destination: "Kerala, India",
    duration: "5 Days",
    price: 1399,
    rating: 4.9,
    reviews: 312,
    image: "/assets/imgs/banner/3.jpg",
    groupSize: "4-10 travelers",
    featured: true,
    status: "published",
    highlights: [
      "Premium houseboat stay",
      "Canal-side village walk",
      "Ayurveda-inspired wellness",
      "Chef-led regional dinner",
    ],
    description:
      "A gentle backwater itinerary with beautiful stays, local storytelling, and a calm pace that feels restorative from start to finish.",
    itinerary: [
      { day: 1, title: "Kochi arrival", description: "Transfer inland and settle into your waterfront hotel." },
      { day: 2, title: "Houseboat embarkation", description: "Cruise the backwaters with lunch onboard and evening tea at anchor." },
      { day: 3, title: "Culture and cuisine", description: "Meet local artisans and enjoy a chef-led dinner with regional flavors." },
    ],
    inclusions: ["Transfers", "Houseboat night", "Breakfast", "Curated local experiences"],
    exclusions: ["Flights", "Alcohol", "Optional wellness treatments"],
    hotels: ["stay-lagoon-haven", "stay-sun-tide"],
    guides: ["guide-meera"],
    gettingThere: "Fly into Kochi International Airport for a private road transfer.",
    accommodation: "Combination of waterfront suites and a premium houseboat cabin.",
    meals: "Breakfast daily, houseboat lunch, and one hosted tasting dinner.",
  },
  {
    id: "4",
    title: "Bali Coral Coast Escape",
    slug: "bali-coral-coast-escape",
    destination: "Bali, Indonesia",
    duration: "6 Days",
    price: 1699,
    rating: 4.7,
    reviews: 189,
    image: "/assets/imgs/banner/4.jpg",
    groupSize: "2-8 travelers",
    featured: false,
    status: "published",
    highlights: [
      "Coastal design stay",
      "Temple and beach pairing",
      "Private harbor transfer",
      "Flexible family pacing",
    ],
    description:
      "A family-friendly ocean itinerary balancing cultural landmarks with comfortable seaside downtime.",
    itinerary: [
      { day: 1, title: "Arrival and rest", description: "Airport pickup and a soft landing at your coastal suite." },
      { day: 2, title: "Temple circuit", description: "Visit cliffside temples before a slow beach afternoon." },
      { day: 3, title: "Island leisure", description: "Optional snorkeling or beach club lounge day." },
    ],
    inclusions: ["Transfers", "Hotel stay", "Breakfast", "Temple driver-guide"],
    exclusions: ["Flights", "Lunches", "Optional excursions"],
    hotels: ["stay-coral-view"],
    guides: ["guide-nyoman"],
    gettingThere: "Fly into Denpasar with a private transfer waiting on arrival.",
    accommodation: "Modern coastal suites near the water.",
    meals: "Breakfast daily.",
  },
  {
    id: "5",
    title: "Santorini Golden Hour Escape",
    slug: "santorini-golden-hour-escape",
    destination: "Santorini, Greece",
    duration: "4 Days",
    price: 1599,
    rating: 4.9,
    reviews: 523,
    image: "/assets/imgs/banner/5.jpg",
    groupSize: "2-8 travelers",
    featured: false,
    status: "draft",
    highlights: [
      "Clifftop stay",
      "Sunset catamaran dinner",
      "Wine estate tasting",
      "Caldera photo session",
    ],
    description:
      "A romantic short break built around iconic viewpoints, thoughtful dining, and sea-facing suites.",
    itinerary: [
      { day: 1, title: "Clifftop arrival", description: "Private transfer and terrace sunset welcome." },
      { day: 2, title: "Caldera at sea", description: "Catamaran sailing with dinner service on the water." },
    ],
    inclusions: ["Suite stay", "Breakfast", "Sunset sailing", "Winery visit"],
    exclusions: ["Flights", "Travel insurance", "Personal purchases"],
    hotels: ["stay-sand-cove"],
    guides: ["guide-elias"],
  },
  {
    id: "6",
    title: "Goa Hidden Coves Weekend",
    slug: "goa-hidden-coves-weekend",
    destination: "Goa, India",
    duration: "3 Days",
    price: 899,
    rating: 4.6,
    reviews: 167,
    image: "/assets/imgs/banner/6.jpg",
    groupSize: "2-6 travelers",
    featured: false,
    status: "published",
    highlights: [
      "Boutique coastal stay",
      "Host-led food walk",
      "Quiet beach mornings",
      "Curated nightlife optionality",
    ],
    description:
      "A short, stylish coastal break with local hosting and just enough structure to keep things easy.",
    itinerary: [
      { day: 1, title: "Check-in and coast", description: "Arrive, settle in, and explore a nearby hidden cove." },
      { day: 2, title: "Food and shoreline", description: "Join a local tasting walk and optional evening music scene." },
    ],
    inclusions: ["Stay", "Breakfast", "Food walk", "Host recommendations"],
    exclusions: ["Flights", "Late-night transport", "Personal expenses"],
    hotels: ["stay-sun-tide"],
    guides: ["guide-meera"],
  },
];

export function getPackageById(id: string) {
  return packages.find((item) => item.id === id);
}

export function getPackageBySlug(slug: string) {
  return packages.find((item) => item.slug === slug);
}
