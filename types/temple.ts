export interface Temple {
  id: string;
  slug: string;
  name: string;
  state: string;
  district: string;
  city: string;
  mainDeity: string;
  otherDeities: string[];
  description: string;
  overview: string;
  history: string;
  architecture: string;
  importance: string;
  festivals: string[];
  timings: string;
  entryFee: string;
  dressCode: string;
  photographyAllowed: boolean;
  latitude: number;
  longitude: number;
  bestTimeToVisit: string;
  facilities: string[];
  nearbyPlaces: string[];
  coverImage: string;
  gallery: string[];
  category: string; // e.g., Jyotirlinga, Shakti Peeth, Divya Desam, etc.
}
