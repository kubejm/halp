import { Question } from '../entities';
import { QuestionValidator } from '../validators';
import { Context } from '../types';

export function getAllQuestions(context: Context) {
  return context.em.getRepository(Question).findAll({
    populate: ['user'],
  });
}

export async function addQuestion(input: QuestionValidator, context: Context) {
  // TODO: error handling
  // TODO: clean this up
  const user = context.user;
  const question = new Question(input, user);

  await context.em.persist(question).flush();
  return question;
}
