import { Answer } from '../entities';
import { Context } from '../types';

export function getAnswer(id: string, { ctx }: Context) {
  return ctx.em.getRepository(Answer).findOneOrFail({
    id,
  });
}
