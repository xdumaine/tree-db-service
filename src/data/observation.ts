export interface StoredObservation {
  id: string;
  species: string | null;
  approved: boolean;
  description: string;
  photos: string[];
}

export const observations: StoredObservation[] = [
  {
    id: "test",
    species: null,
    approved: false,
    description: "Test",
    photos: [],
  },
];
