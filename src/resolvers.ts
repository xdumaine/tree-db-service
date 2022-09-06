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
      return species.filter((s) => (s.genus as any) === genus.name).length;
    },
  },
  Species: {
    observations: (t) => {
      const nodes = observations.filter((o) => o.species?.name === t.name);
      return {
        edges: nodes.map((node) => ({ node })),
        pageInfo: {
          hasNextPage: false,
        },
      };
    },
  },
};
