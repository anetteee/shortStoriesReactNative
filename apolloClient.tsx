import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "http://it2810-27.idi.ntnu.no:4000/graphql",
  cache: new InMemoryCache(),
});
