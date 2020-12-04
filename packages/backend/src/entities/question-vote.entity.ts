import { Entity, Enum, ManyToOne } from '@mikro-orm/core';
import { Base } from './base.entity';
import { Question } from './question.entity';
import { User } from './user.entity';

export enum QuestionVoteAction {
  UPVOTE,
  DOWNVOTE,
}

@Entity()
export class QuestionVote extends Base<QuestionVote> {
  @Enum()
  action!: QuestionVoteAction;

  @ManyToOne(() => Question)
  question!: Question;

  @ManyToOne(() => User)
  user!: User;
}
