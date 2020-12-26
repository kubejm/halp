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
import { Answer } from './answer.entity';
import { QuestionVote } from './question-vote.entity';
import { getCtx } from '../utils';
import { VoteAction } from './types';

@ObjectType()
@Entity()
export class Question extends Base<Question> {
  @Field()
  @Property()
  answerCount: number = 0;

  @Field()
  @Property()
  voteCount: number = 0;

  @Field()
  @ManyToOne({ entity: () => User, eager: true })
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

  @OneToMany({
    entity: () => QuestionVote,
    mappedBy: 'question',
    eager: true,
    orphanRemoval: true,
  })
  votes = new Collection<QuestionVote>(this);

  @Field(() => [Answer])
  @OneToMany({
    entity: () => Answer,
    mappedBy: 'question',
    eager: true,
    orphanRemoval: true,
  })
  answers = new Collection<Answer>(this);

  @Field()
  get hasUserUpvoted(): boolean {
    const ctx = getCtx();

    return this.votes.getItems().some((vote) => {
      return vote.user === ctx.user && vote.action === VoteAction.UPVOTE;
    });
  }

  @Field()
  get hasUserDownvoted(): boolean {
    const ctx = getCtx();

    return this.votes.getItems().some((vote) => {
      return vote.user === ctx.user && vote.action === VoteAction.DOWNVOTE;
    });
  }

  @Field()
  isUserAuthor(): boolean {
    const ctx = getCtx();
    return ctx.user?.username === this.user.username;
  }
}
