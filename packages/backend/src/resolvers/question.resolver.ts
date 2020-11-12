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
