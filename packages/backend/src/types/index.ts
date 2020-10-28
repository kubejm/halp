import { Connection, EntityManager, IDatabaseDriver } from '@mikro-orm/core';
import { Context as KoaContext } from 'koa';

export interface Context extends KoaContext {
  em: EntityManager<IDatabaseDriver<Connection>>;
}
