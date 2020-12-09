import { Tag } from '../entities';
import { Context } from '../types';

export function getTags({ ctx }: Context) {
  return ctx.em.getRepository(Tag).findAll();
}
