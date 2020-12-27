import { Field, ObjectType } from 'type-graphql';
import {
  Collection,
  Entity,
  OneToMany,
  ManyToOne,
  Property,
} from '@mikro-orm/core';
import { Base } from './base.entity';
import { Question } from './question.entity';
import { AnswerVote } from './answer-vote.entity';
import { User } from './user.entity';
import { formatDistanceToNow } from 'date-fns';
import { VoteAction } from './types';
import { getCtx } from '../utils';

@ObjectType()
@Entity()
export class Answer extends Base<Answer> {
  @Field(() => Question)
  @ManyToOne(() => Question)
  question!: Question;

  @Field(() => User)
  @ManyToOne(() => User, { eager: true })
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
  @Property()
  voteCount: number = 0;

  @OneToMany({
    entity: () => AnswerVote,
    mappedBy: 'answer',
    eager: true,
    orphanRemoval: true,
  })
  votes = new Collection<AnswerVote>(this);

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
