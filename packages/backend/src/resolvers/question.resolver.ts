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
import { IsString, IsUUID } from 'class-validator';

@InputType()
export class AddQuestionInput {
  @Field()
  @IsString()
  body!: string;

  @Field()
  @IsString()
  question!: string;
}

@InputType()
export class GetQuestionInput {
  @Field()
  @IsUUID()
  id!: string;
}

@InputType()
export class ViewQuestionInput {
  @Field()
  @IsUUID()
  id!: string;
}

@InputType()
export class UpvoteQuestionInput {
  @Field()
  @IsUUID()
  id!: string;
}

@Resolver(() => Question)
export class QuestionResolver {
  @Query(() => [Question])
  questions(@Ctx() context: Context) {
    return questionService.getAllQuestions(context);
  }

  @Query(() => Question)
  question(@Arg('input') input: GetQuestionInput, @Ctx() context: Context) {
    return questionService.getQuestion(input.id, context);
  }

  @Mutation(() => Question)
  viewQuestion(
    @Arg('input') input: ViewQuestionInput,
    @Ctx() context: Context
  ) {
    return questionService.viewQuestion(input.id, context);
  }

  @Mutation(() => Question)
  async addQuestion(
    @Arg('input') input: AddQuestionInput,
    @Ctx() context: Context
  ): Promise<Question> {
    const question = Object.assign(new Question(), input);
    return questionService.addQuestion(question, context);
  }

  @Mutation(() => Question)
  async upvoteQuestion(
    @Arg('input') input: UpvoteQuestionInput,
    @Ctx() context: Context
  ) {
    return questionService.upvoteQuestion(input.id, context);
  }
}
