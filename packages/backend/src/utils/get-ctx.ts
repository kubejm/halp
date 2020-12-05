import { AsyncLocalStorage } from 'async_hooks';
import { Context as KoaContext, Next } from 'koa';

const asyncLocalStorage = new AsyncLocalStorage<KoaContext>();

export function storeCtx(ctx: KoaContext, next: Next) {
  return asyncLocalStorage.run(ctx, next);
}

export function getCtx() {
  const ctx = asyncLocalStorage.getStore();

  if (!ctx) {
    throw new Error('called outside of an async context');
  }

  return ctx;
}
