import { Field, InputType } from 'type-graphql';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { TagValidator } from './tag.validator';

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

  @Field(() => [TagValidator])
  @IsArray()
  @IsOptional()
  @ValidateNested()
  tags?: TagValidator[];
}
