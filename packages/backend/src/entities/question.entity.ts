import {
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  Property,
} from '@mikro-orm/core';
import { Field, ObjectType } from 'type-graphql';
import { Base } from './base.entity';
import { Tag } from './tag.entity';
import { User } from './user.entity';
import { formatDistanceToNow } from 'date-fns';
import { QuestionVote } from './question-vote.entity';

@ObjectType()
@Entity()
export class Question extends Base<Question> {
  @Field()
  @Property()
  answers: number = 0;

  @Field()
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

  @Field()
  get excerpt(): string {
    return this.body.length > 200 ? `${this.body.slice(0, 197)}...` : this.body;
  }

  @Field()
  @Property()
  question!: string;

  @Field(() => [Tag])
  @ManyToMany({ entity: () => Tag, eager: true })
  tags = new Collection<Tag>(this);

  @Field()
  @Property()
  views: number = 0;

  @OneToMany({ entity: () => QuestionVote, mappedBy: 'question', eager: true })
  questionVotes = new Collection<QuestionVote>(this);

  @Field()
  get votes(): number {
    return this.questionVotes.length;
  }
}
