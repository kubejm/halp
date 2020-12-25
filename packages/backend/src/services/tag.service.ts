import { Tag } from '../entities';
import { Context } from '../types';

export function getTags({ ctx }: Context) {
  return ctx.em.getRepository(Tag).findAll();
}

export async function getTagQuestionCount(tag: Tag) {
  return tag.questions.loadCount();
}
