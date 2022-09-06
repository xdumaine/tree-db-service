import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

import { ApolloServer } from "apollo-server";

import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { resolvers } from "./resolvers";

const schema = loadSchemaSync(
  "./node_modules/tree-db-schema/schema/schema.gql",
  {
    loaders: [new GraphQLFileLoader()],
  }
);

const server = new ApolloServer({
  typeDefs: schema,

  resolvers,
  cors: {
    origin: true,
  },

  // This is to let us hit our server locally
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
