import { Field, InputType } from 'type-graphql';
import { IsString } from 'class-validator';

@InputType()
export class QuestionValidator {
  @Field()
  @IsString()
  author!: string;

  @Field()
  @IsString()
  body!: string;

  @Field()
  @IsString()
  question!: string;
}
