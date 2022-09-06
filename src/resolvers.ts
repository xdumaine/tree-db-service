import { observations } from "./data/observation";

export const resolvers = {
  Query: {
    observations: () => {
      return observations;
    },
  },
};
