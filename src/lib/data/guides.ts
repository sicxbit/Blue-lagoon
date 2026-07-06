import type { Guide } from "@/models/guide.model";

export type LocalGuide = Guide;

export const guides: Guide[] = [
  {
    id: "guide-amara",
    name: "Amina Koya",
    location: "Agatti, Lakshadweep",
    languages: ["English", "Malayalam", "Jasari"],
    image: "/assets/imgs/vendor/G1.png",
    rating: 4.9,
    bio: "A local marine guide who helps Blue Lagoon travelers navigate Agatti's reefs, sandbanks, and soft-paced island days with confidence.",
    specialties: ["Snorkeling routes", "Lagoon walks", "Sunset sandbanks"],
    phone: "+91 98470 11223",
    email: "amara@bluelagoon.travel",
    status: "published",
  },
  {
    id: "guide-elias",
    name: "Rashid Latheef",
    location: "Bangaram and Thinnakara, Lakshadweep",
    languages: ["English", "Malayalam", "Hindi"],
    image: "/assets/imgs/vendor/G2.png",
    rating: 4.8,
    bio: "An island host focused on premium beach setups, shoreline logistics, and helping visitors move smoothly between partner stays.",
    specialties: ["Island transfers", "Photo stops", "Couples itineraries"],
    email: "elias@bluelagoon.travel",
    status: "published",
  },
  {
    id: "guide-meera",
    name: "Shaina Ali",
    location: "Kadmat, Lakshadweep",
    languages: ["English", "Hindi", "Malayalam"],
    image: "/assets/imgs/vendor/G3.png",
    rating: 4.9,
    bio: "A dive-and-culture host who helps travelers balance reef experiences with the slower rhythm of Kadmat island life.",
    specialties: ["Scuba guidance", "Lagoon safety", "Local food experiences"],
    phone: "+91 90000 11223",
    status: "published",
  },
  {
    id: "guide-nyoman",
    name: "Nawaz Koya",
    location: "Kavaratti and Minicoy, Lakshadweep",
    languages: ["English", "Malayalam", "Tamil"],
    image: "/assets/imgs/vendor/G4.png",
    rating: 4.7,
    bio: "A culture-focused island guide helping travelers understand waterfront life, village routes, and local hospitality traditions.",
    specialties: ["Island culture", "Fishing village trails", "Family travel"],
    status: "draft",
  },
];
