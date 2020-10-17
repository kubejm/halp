import 'reflect-metadata';
import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { buildSchema } from 'type-graphql';
import { MikroORM, RequestContext } from '@mikro-orm/core';
import ormConfig from './orm.config';

async function main() {
  const orm = await MikroORM.init(ormConfig);

  const schema = await buildSchema({
    resolvers: [__dirname + "/resolvers/**/*.{ts,js}"],
  });

  const server = new ApolloServer({
    schema,
    context: () => {
      return {
        em: orm.em,
      };
    }
  });

  const app = new Koa();
  app.use((_, next) => RequestContext.createAsync(orm.em, next));
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
  );
}

main().catch(console.error);
