import { Connection, EntityManager, IDatabaseDriver } from '@mikro-orm/core';
import { Context as KoaContext } from 'koa';
import { User } from '../entities';

export interface Ctx extends KoaContext {
  em: EntityManager<IDatabaseDriver<Connection>>;
  user?: User;
}

export interface Context {
  ctx: Ctx;
}

export interface jwtPayload {
  roles: string[];
  iat: number;
  sub: string;
  exp: number;
}
