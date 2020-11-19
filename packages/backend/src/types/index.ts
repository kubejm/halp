import { Connection, EntityManager, IDatabaseDriver } from '@mikro-orm/core';
import { Context as KoaContext } from 'koa';
import { User } from '../entities';

// TODO: interface or type?
export interface Context {
  ctx: KoaContext;
  em: EntityManager<IDatabaseDriver<Connection>>;
  user: User | null;
}

export type jwtPayload = {
  roles: string[];
  iat: number;
  sub: string;
  exp: number;
};
