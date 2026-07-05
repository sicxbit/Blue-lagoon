export interface LocalGuide {
  id: string;
  name: string;
  location: string;
  languages: string[];
  image: string;
  rating: number;
  bio: string;
  specialties: string[];
  phone?: string;
  email?: string;
  status: "draft" | "published";
}

export const guides: LocalGuide[] = [
  {
    id: "guide-amara",
    name: "Amara Silva",
    location: "Maldives",
    languages: ["English", "Dhivehi"],
    image: "/assets/imgs/vendor/G1.png",
    rating: 4.9,
    bio: "Marine-naturalist guide focused on reef life, private island experiences, and low-stress luxury pacing.",
    specialties: ["Snorkeling routes", "Couples itineraries", "Sunset sandbanks"],
    phone: "+960 555 0148",
    email: "amara@bluelagoon.travel",
    status: "published",
  },
  {
    id: "guide-elias",
    name: "Elias Petrou",
    location: "Greek Islands",
    languages: ["English", "Greek", "Italian"],
    image: "/assets/imgs/vendor/G2.png",
    rating: 4.8,
    bio: "Island-hopping specialist who blends village dining, sailing days, and boutique stays.",
    specialties: ["Harbor dining", "Catamaran days", "Photo stops"],
    email: "elias@bluelagoon.travel",
    status: "published",
  },
  {
    id: "guide-meera",
    name: "Meera Nair",
    location: "Kerala",
    languages: ["English", "Hindi", "Malayalam"],
    image: "/assets/imgs/vendor/G3.png",
    rating: 4.9,
    bio: "Backwater storyteller and culinary host with a strong focus on slow-travel experiences.",
    specialties: ["Backwater routes", "Ayurveda stays", "Cuisine tastings"],
    phone: "+91 90000 11223",
    status: "published",
  },
  {
    id: "guide-nyoman",
    name: "Nyoman Putra",
    location: "Bali",
    languages: ["English", "Bahasa Indonesia"],
    image: "/assets/imgs/vendor/G4.png",
    rating: 4.7,
    bio: "Local island host for beach clubs, temple circuits, and easy family-friendly pacing.",
    specialties: ["Family travel", "Temple visits", "Private transfers"],
    status: "draft",
  },
];
