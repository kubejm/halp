import 'reflect-metadata';
import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { buildSchema } from 'type-graphql';
import { MikroORM, RequestContext } from '@mikro-orm/core';
import ormConfig from './orm.config';
import path from 'path';
import jwt from 'jsonwebtoken';
import { User } from './entities';
import { jwtPayload } from './types';

async function main() {
  const isProduction = process.env.NODE_ENV === 'production';
  const orm = await MikroORM.init(ormConfig);

  const schema = await buildSchema({
    resolvers: [__dirname + '/resolvers/**/*.{ts,js}'],
    ...(!isProduction && {
      emitSchemaFile: path.resolve(__dirname, '__schema__/schema.gql'),
    }),
  });

  const server = new ApolloServer({
    schema,
    context: async ({ ctx }) => {
      // TODO: abstract this out
      const token = ctx.cookies.get('token');
      const payload = jwt.decode(token) as jwtPayload;
      const userRepository = orm.em.getRepository(User);
      const user = await userRepository.findOne({
        id: payload?.sub,
      });

      return {
        ctx,
        em: orm.em,
        user,
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
