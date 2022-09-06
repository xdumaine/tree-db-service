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
    speciesCount: (genus) => {
      return species.filter((s) => s.genus === genus.name).length;
    },
    species: (genus) => {
      return species.filter((s) => s.genus === genus.name);
    },
  },
  Species: {
    observations: (species) => {
      const nodes = observations.filter((o) => o.species === species.name);
      return {
        edges: nodes.map((node) => ({ node })),
        pageInfo: {
          hasNextPage: false,
        },
      };
    },
  },
};
