import { Entity, Enum, ManyToOne } from '@mikro-orm/core';
import { Base } from './base.entity';
import { Question } from './question.entity';
import { User } from './user.entity';
import { VoteAction } from './types';

@Entity()
export class QuestionVote extends Base<QuestionVote> {
  @Enum(() => VoteAction)
  action!: VoteAction;

  @ManyToOne(() => Question)
  question!: Question;

  @ManyToOne(() => User)
  user!: User;
}
