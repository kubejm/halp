import { Field, InputType } from 'type-graphql';
import { IsString } from 'class-validator';

@InputType()
export class TagValidator {
  @Field()
  @IsString()
  name!: string;
}
