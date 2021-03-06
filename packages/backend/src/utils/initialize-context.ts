import { Connection, IDatabaseDriver, MikroORM } from '@mikro-orm/core';
import jwt from 'jsonwebtoken';
import { User } from '../entities';
import { jwtPayload, Context } from '../types';

export function initializeContext(orm: MikroORM<IDatabaseDriver<Connection>>) {
  return async function ({ ctx }: Context): Promise<Context> {
    ctx.em = orm.em;

    const token = ctx.cookies.get('token');
    if (token === undefined) {
      return {
        ctx,
      };
    }

    const payload = jwt.decode(token) as jwtPayload;
    const userRepository = orm.em.getRepository(User);
    const user =
      (await userRepository.findOne({
        id: payload?.sub,
      })) ?? undefined;

    ctx.user = user;

    return {
      ctx,
    };
  };
}
