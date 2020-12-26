import { Field, ObjectType } from 'type-graphql';
import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { Base } from './base.entity';
import { Question } from './question.entity';
import { User } from './user.entity';
import { formatDistanceToNow } from 'date-fns';

@ObjectType()
@Entity()
export class Answer extends Base<Answer> {
  @Field(() => Question)
  @ManyToOne(() => Question)
  question!: Question;

  @Field(() => User)
  @ManyToOne(() => User)
  user!: User;

  @Field()
  @Property({ type: 'text' })
  body!: string;

  @Field()
  get createdAtRelative(): string {
    return `${formatDistanceToNow(this.createdAt, {
      addSuffix: true,
    })}`;
  }
}
