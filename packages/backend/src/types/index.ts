import { Connection, EntityManager, IDatabaseDriver } from '@mikro-orm/core';
import { Context as KoaContext } from 'koa';

// TODO: interface or type?
export interface Context {
  ctx: KoaContext;
  em: EntityManager<IDatabaseDriver<Connection>>;
}

export type jwtPayload = {
  roles: string[];
  iat: number;
  sub: string;
  exp: number;
};
