import {
  Collection,
  Entity,
  OneToMany,
  Property,
  Unique,
} from '@mikro-orm/core';
import { Base } from './base.entity';
import { Question } from './question.entity';
import { QuestionAnswer } from './question-answer.entity';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class User extends Base<User> {
  @Field()
  @Property()
  @Unique()
  username!: string;

  @Field()
  @Property()
  @Unique()
  email!: string;

  @Property()
  passwordHash!: string;

  @OneToMany(() => Question, (question) => question.user)
  questions = new Collection<Question>(this);

  @OneToMany(() => QuestionAnswer, (questionAnswer) => questionAnswer.user)
  questionAnswers = new Collection<QuestionAnswer>(this);
}
