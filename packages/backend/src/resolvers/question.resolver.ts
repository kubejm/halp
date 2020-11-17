import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import { Question } from '../entities';
import { Context } from '../types';
import { questionService } from '../services';
import { IsString } from 'class-validator';

@InputType()
export class AddQuestionInput {
  @Field()
  @IsString()
  body!: string;

  @Field()
  @IsString()
  question!: string;
}

@Resolver(() => Question)
export class QuestionResolver {
  @Query(() => [Question])
  questions(@Ctx() context: Context) {
    return questionService.getAllQuestions(context);
  }

  @Mutation(() => Question)
  async addQuestion(
    @Arg('input') input: AddQuestionInput,
    @Ctx() context: Context
  ): Promise<Question> {
    const question = Object.assign(new Question(), input);
    return questionService.addQuestion(question, context);
  }
}
