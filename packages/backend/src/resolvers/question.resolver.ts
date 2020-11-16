import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Question } from '../entities';
import { QuestionValidator } from '../validators';
import { Context } from '../types';
import { questionService } from '../services';

@Resolver(() => Question)
export class QuestionResolver {
  @Query(() => [Question])
  questions(@Ctx() context: Context) {
    return questionService.getAllQuestions(context);
  }

  @Mutation(() => Question)
  async addQuestion(
    @Arg('input') input: QuestionValidator,
    @Ctx() context: Context
  ): Promise<Question> {
    return questionService.addQuestion(input, context);
  }
}
