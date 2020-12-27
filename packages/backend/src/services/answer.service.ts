import { Answer, AnswerVote, VoteAction } from '../entities';
import { Context } from '../types';

export function getAnswer(id: string, { ctx }: Context) {
  return ctx.em.getRepository(Answer).findOneOrFail({
    id,
  });
}

async function vote(id: string, action: VoteAction, { ctx }: Context) {
  const answer = await ctx.em.getRepository(Answer).findOneOrFail({
    id,
  });

  if (!ctx.user?.id) {
    throw new Error('must be logged in to vote');
  }

  if (ctx.user?.id === answer.user.id) {
    throw new Error('answer authors cannot vote on their own answer');
  }

  const answerVote = await ctx.em.getRepository(AnswerVote).findOne({
    answer,
    user: ctx.user,
  });

  if (answerVote && answerVote.action === action) {
    // people cannot vote the same direction multiple times
    return answer;
  }

  if (answerVote) {
    answer.votes.remove(answerVote);
  } else {
    answer.votes.add(
      Object.assign(new AnswerVote(), {
        action,
        answer,
        user: ctx.user,
      })
    );
  }

  answer.voteCount += action === VoteAction.UPVOTE ? 1 : -1;

  await ctx.em.persist(answer).flush();

  return answer;
}

export async function upvoteAnswer(id: string, context: Context) {
  return vote(id, VoteAction.UPVOTE, context);
}

export async function downvoteAnswer(id: string, context: Context) {
  return vote(id, VoteAction.DOWNVOTE, context);
}
