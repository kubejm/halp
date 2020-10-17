import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class Tag {
  @Field()
  label!: string;
}

@ObjectType()
export class Question {
  @Field()
  answers!: number;

  @Field()
  askedTime!: string;

  @Field()
  author!: string;

  @Field()
  excerpt!: string;

  @Field()
  question!: string;

  @Field(() => [Tag])
  tags!: Tag[];

  @Field()
  views!: number;

  @Field()
  votes!: number;
}


