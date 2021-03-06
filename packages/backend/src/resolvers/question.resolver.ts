import {
  Arg,
  Ctx,
  Field,
  InputType,
  ObjectType,
  Mutation,
  Query,
  Resolver,
  registerEnumType,
} from 'type-graphql';
import { Question } from '../entities';
import { Context } from '../types';
import { questionService } from '../services';
import {
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  IsString,
  IsNumber,
  IsUUID,
  Length,
  MaxLength,
  MinLength,
  IsEnum,
} from 'class-validator';

registerEnumType(questionService.QuestionOrderBy, { name: 'QuestionOrderBy' });

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
  @Field({ nullable: true })
  @IsString()
  tag?: string;

  @Field(() => questionService.QuestionOrderBy, { nullable: true })
  @IsEnum(questionService.QuestionOrderBy)
  orderBy?: questionService.QuestionOrderBy;

  @Field({ nullable: true })
  @IsNumber()
  page?: number;

  @Field({ nullable: true })
  @IsNumber()
  pageSize?: number;
}

@ObjectType()
export class QuestionsPage {
  @Field(() => [Question])
  questions!: Question[];

  @Field()
  questionCount!: number;

  @Field()
  pageCount!: number;
}

@InputType()
export class QuestionByIdInput {
  @Field()
  @IsUUID()
  id!: string;
}

@InputType()
export class AnswerQuestionInput {
  @Field()
  @IsUUID()
  id!: string;

  @Field()
  @IsString()
  answer!: string;
}

@Resolver(() => Question)
export class QuestionResolver {
  @Query(() => Number)
  questionCount(@Ctx() context: Context) {
    return questionService.getQuestionCount(context);
  }

  @Query(() => QuestionsPage)
  async questionsPage(
    @Ctx() context: Context,
    @Arg('input', { nullable: true }) input?: GetQuestionsInput
  ) {
    const [
      questions,
      questionCount,
      pageCount,
    ] = await questionService.getQuestions(context, input);

    return Object.assign(
      {
        questions,
        questionCount,
        pageCount,
      },
      new QuestionsPage()
    );
  }

  @Query(() => Question)
  question(@Arg('input') input: QuestionByIdInput, @Ctx() context: Context) {
    return questionService.getQuestion(input.id, context);
  }

  @Mutation(() => Question)
  viewQuestion(
    @Arg('input') input: QuestionByIdInput,
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

    return questionService.addQuestion(context, question, input.tags);
  }

  @Mutation(() => Question)
  async upvoteQuestion(
    @Arg('input') input: QuestionByIdInput,
    @Ctx() context: Context
  ) {
    return questionService.upvoteQuestion(input.id, context);
  }

  @Mutation(() => Question)
  async downvoteQuestion(
    @Arg('input') input: QuestionByIdInput,
    @Ctx() context: Context
  ) {
    return questionService.downvoteQuestion(input.id, context);
  }

  @Mutation(() => Question)
  async answerQuestion(
    @Arg('input') input: AnswerQuestionInput,
    @Ctx() context: Context
  ) {
    return questionService.answerQuestion(input.id, input.answer, context);
  }
}
