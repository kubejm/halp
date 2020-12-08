import { AsyncLocalStorage } from 'async_hooks';
import { Next } from 'koa';
import { Ctx } from '../types';

const asyncLocalStorage = new AsyncLocalStorage<Ctx>();

export function storeCtx(ctx: Ctx, next: Next) {
  return asyncLocalStorage.run(ctx, next);
}

export function getCtx() {
  const ctx = asyncLocalStorage.getStore();

  if (!ctx) {
    throw new Error('called outside of an async context');
  }

  return ctx;
}
