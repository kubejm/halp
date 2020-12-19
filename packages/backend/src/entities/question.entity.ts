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
import { QuestionVote, QuestionVoteAction } from './question-vote.entity';
import { getCtx } from '../utils';

@ObjectType()
@Entity()
export class Question extends Base<Question> {
  @Field()
  @Property()
  answers: number = 0;

  @Field()
  @Property()
  votes: number = 0;

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
  questionVotes = new Collection<QuestionVote>(this);

  @Field()
  get hasUserUpvoted(): boolean {
    const ctx = getCtx();

    return this.questionVotes.getItems().some((questionVote) => {
      return (
        questionVote.user === ctx.user &&
        questionVote.action === QuestionVoteAction.UPVOTE
      );
    });
  }

  @Field()
  get hasUserDownvoted(): boolean {
    const ctx = getCtx();

    return this.questionVotes.getItems().some((questionVote) => {
      return (
        questionVote.user === ctx.user &&
        questionVote.action === QuestionVoteAction.DOWNVOTE
      );
    });
  }

  @Field()
  isUserAuthor(): boolean {
    const ctx = getCtx();
    return ctx.user?.username === this.user.username;
  }
}
