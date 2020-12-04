import { Entity, Enum, ManyToOne } from '@mikro-orm/core';
import { Base } from './base.entity';
import { Question } from './question.entity';
import { User } from './user.entity';

export enum QuestionVoteAction {
  UPVOTE = 'upvote',
  DOWNVOTE = 'downvote',
}

@Entity()
export class QuestionVote extends Base<QuestionVote> {
  @Enum(() => QuestionVoteAction)
  action!: QuestionVoteAction;

  @ManyToOne(() => Question)
  question!: Question;

  @ManyToOne(() => User)
  user!: User;
}
