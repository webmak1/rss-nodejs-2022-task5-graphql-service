import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { readFileSync } from 'fs';
import { Query } from './resolvers/Query.js';


const app = express();

// @ts-ignore
const typeDefs = readFileSync('./src/schema.graphql', 'UTF-8');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query
  },
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(
    `GraphQL Server running at http://localhost:4000${server.graphqlPath}`
  )
);