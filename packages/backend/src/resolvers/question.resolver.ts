import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Question } from '../entities';
import { QuestionValidator } from '../validators';
import { Context } from '../types';

@Resolver(() => Question)
export class QuestionResolver {
  @Query(() => [Question])
  questions(@Ctx() context: Context) {
    return context.em.getRepository(Question).findAll();
  }

  @Mutation(() => Question)
  async addQuestion(
    @Arg('input') input: QuestionValidator,
    @Ctx() context: Context
  ): Promise<Question> {
    // TODO: error handling
    // TODO: clean this up
    const user = context.user;
    const question = new Question(input);
    question.user = user;

    await context.em.persist(question).flush();
    return question;
  }
}
