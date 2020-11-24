import { Question } from '../entities';
import { Context } from '../types';

export function getAllQuestions(context: Context) {
  return context.em.getRepository(Question).findAll({
    populate: ['user'],
  });
}

export function getQuestion(id: string, context: Context) {
  return context.em.getRepository(Question).findOneOrFail(
    {
      id,
    },
    {
      populate: ['user'],
    }
  );
}

export async function addQuestion(input: Question, context: Context) {
  // TODO: error handling
  const user = context.user;
  const question = Object.assign(input, {
    user,
  });

  await context.em.persist(question).flush();
  return question;
}
