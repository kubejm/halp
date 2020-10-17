import 'reflect-metadata';
import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { buildSchema } from 'type-graphql';

async function main() {
  const schema = await buildSchema({
    resolvers: [__dirname + "/resolvers/**/*.{ts,js}"],
  });

  const server = new ApolloServer({ schema });

  const app = new Koa();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
  );
}

main().catch(console.error);
