import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Result {
  @Field()
  ok: boolean = true;
}
