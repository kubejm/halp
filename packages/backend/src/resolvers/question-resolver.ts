import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Question } from '../entities';
import { QuestionValidator } from '../validators';
import { Context } from '../types';

@Resolver(() => Question)
export class QuestionResolver {
  @Query(() => [Question])
  questions(@Ctx() ctx: Context) {
    return ctx.em.getRepository(Question).findAll();
  }

  @Mutation(() => Question)
  async addQuestion(@Arg('input') input: QuestionValidator, @Ctx() ctx: Context): Promise<Question> {
    const question = new Question(input);
    await ctx.em.persist(question).flush();
    return question;
  }
}
