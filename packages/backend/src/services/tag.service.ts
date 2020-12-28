import { QueryOrder } from '@mikro-orm/core';
import { Tag } from '../entities';
import { Context } from '../types';

export function getTags({ ctx }: Context) {
  return ctx.em.getRepository(Tag).findAll({
    orderBy: {
      name: QueryOrder.ASC,
    },
  });
}

export async function getTagQuestionCount(tag: Tag) {
  return tag.questions.loadCount();
}
