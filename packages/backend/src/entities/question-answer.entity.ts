import { Field, ObjectType } from 'type-graphql';
import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { Base } from './base.entity';
import { Question } from './question.entity';
import { User } from './user.entity';

@ObjectType()
@Entity()
export class QuestionAnswer extends Base<QuestionAnswer> {
  @ManyToOne(() => Question)
  question!: Question;

  @ManyToOne(() => User)
  user!: User;

  @Field()
  @Property({ type: 'text' })
  body!: string;
}
