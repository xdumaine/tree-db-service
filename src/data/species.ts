import { LeafType } from "../types.generated";

export interface StoredSpecies {
  name: string;
  genus: string;
  commonNames: string[];
  leafType: LeafType;
}

export const species: StoredSpecies[] = [
  {
    name: "alba",
    genus: "quercus",
    commonNames: ["white oak"],
    leafType: LeafType.Lobed,
  },
];
