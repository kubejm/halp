import { Entity, Enum, ManyToOne } from '@mikro-orm/core';
import { Base } from './base.entity';
import { Answer } from './answer.entity';
import { User } from './user.entity';
import { VoteAction } from './types';

@Entity()
export class AnswerVote extends Base<AnswerVote> {
  @Enum(() => VoteAction)
  action!: VoteAction;

  @ManyToOne(() => Answer)
  answer!: Answer;

  @ManyToOne(() => User)
  user!: User;
}
