import { Arg, Ctx, Field, InputType, Query, Resolver } from 'type-graphql';
import { Answer } from '../entities';
import { Context } from '../types';
import { answerService } from '../services';
import { IsUUID } from 'class-validator';

@InputType()
export class AnswerByIdInput {
  @Field()
  @IsUUID()
  id!: string;
}

@Resolver(() => Answer)
export class AnswerResolver {
  @Query(() => Answer)
  answer(@Arg('input') input: AnswerByIdInput, @Ctx() context: Context) {
    return answerService.getAnswer(input.id, context);
  }
}
