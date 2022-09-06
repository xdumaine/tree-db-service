import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs,

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
