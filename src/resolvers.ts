import { genera } from "./data/genus";
import { observations } from "./data/observation";
import { species } from "./data/species";
import { QueryResolvers, Resolvers } from "./types.generated";

const queryResolvers: QueryResolvers = {
  genera: () => {
    return genera;
  },
  species: () => {
    return species;
  },
  observations: () => {
    return observations;
  },
};

export const resolvers: Resolvers = {
  Query: queryResolvers,
  Genus: {
    speciesCount: (t) => {
      return species.filter((s) => (s.genus as any) === t.name).length;
    },
  },
};
