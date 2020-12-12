import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import { Question, Tag } from '../entities';
import { Context } from '../types';
import { questionService } from '../services';
import {
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  IsString,
  IsUUID,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class AddQuestionInput {
  @Field()
  @IsString()
  body!: string;

  @Field()
  @IsString()
  @Length(15, 300)
  question!: string;

  @Field(() => [String])
  @IsArray()
  @MinLength(2, {
    each: true,
  })
  @MaxLength(15, {
    each: true,
  })
  @ArrayMinSize(1)
  @ArrayMaxSize(5)
  tags!: string[];
}

@InputType()
export class GetQuestionsInput {
  @Field()
  @IsString()
  tag!: string;
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

@InputType()
export class DownvoteQuestionInput {
  @Field()
  @IsUUID()
  id!: string;
}

@Resolver(() => Question)
export class QuestionResolver {
  @Query(() => [Question])
  questions(
    @Ctx() context: Context,
    @Arg('input', { nullable: true }) input?: GetQuestionsInput
  ) {
    return questionService.getQuestions(context, input?.tag);
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
    const question = Object.assign(new Question(), {
      question: input.question,
      body: input.body,
    });

    if (Array.isArray(input.tags)) {
      input.tags.forEach((tag) => {
        question.tags.add(
          Object.assign(new Tag(), {
            name: tag,
            question,
          })
        );
      });
    }

    return questionService.addQuestion(question, context);
  }

  @Mutation(() => Question)
  async upvoteQuestion(
    @Arg('input') input: UpvoteQuestionInput,
    @Ctx() context: Context
  ) {
    return questionService.upvoteQuestion(input.id, context);
  }

  @Mutation(() => Question)
  async downvoteQuestion(
    @Arg('input') input: DownvoteQuestionInput,
    @Ctx() context: Context
  ) {
    return questionService.downvoteQuestion(input.id, context);
  }
}
