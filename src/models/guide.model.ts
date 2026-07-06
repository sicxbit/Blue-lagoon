export interface Guide {
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
