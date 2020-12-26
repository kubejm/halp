import {
  Collection,
  Entity,
  OneToMany,
  Property,
  Unique,
} from '@mikro-orm/core';
import { Base } from './base.entity';
import { Question } from './question.entity';
import { Answer } from './answer.entity';
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

  @OneToMany(() => Answer, (answer) => answer.user)
  answers = new Collection<Answer>(this);
}
