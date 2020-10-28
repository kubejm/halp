import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql';
import { Question } from '../entities';
import { QuestionValidator } from '../validators';
import { Context } from '../types';
import { formatDistanceToNow } from 'date-fns';

@Resolver(() => Question)
export class QuestionResolver {
  @Query(() => [Question])
  questions(@Ctx() ctx: Context) {
    return ctx.em.getRepository(Question).findAll();
  }

  @Mutation(() => Question)
  async addQuestion(
    @Arg('input') input: QuestionValidator,
    @Ctx() ctx: Context
  ): Promise<Question> {
    const question = new Question(input);
    await ctx.em.persist(question).flush();
    return question;
  }

  @FieldResolver()
  createdAtRelative(@Root() question: Question) {
    return `${formatDistanceToNow(question.createdAt, {
      addSuffix: true,
    })}`;
  }

  @FieldResolver()
  excerpt(@Root() question: Question) {
    return question.body.length > 200
      ? `${question.body.slice(0, 197)}...`
      : question.body;
  }
}
