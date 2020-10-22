import 'reflect-metadata';
import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { buildSchema } from 'type-graphql';
import { MikroORM, RequestContext } from '@mikro-orm/core';
import ormConfig from './orm.config';
import path from 'path';

async function main() {
  const orm = await MikroORM.init(ormConfig);

  // TODO: toggle off emit schema file for production
  const schema = await buildSchema({
    resolvers: [__dirname + '/resolvers/**/*.{ts,js}'],
    emitSchemaFile: path.resolve(__dirname, '__schema__/schema.gql'),
  });

  const server = new ApolloServer({
    schema,
    context: () => {
      return {
        em: orm.em,
      };
    },
  });

  const app = new Koa();
  app.use((_, next) => RequestContext.createAsync(orm.em, next));
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

main().catch(console.error);
