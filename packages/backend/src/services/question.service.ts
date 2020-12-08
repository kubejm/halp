import { wrap } from '@mikro-orm/core';
import { Question, QuestionVote, QuestionVoteAction } from '../entities';
import { Context } from '../types';

export function getQuestions({ ctx }: Context, tag?: string) {
  if (tag) {
    return ctx.em.getRepository(Question).find(
      {
        tags: { name: tag },
      },
      {
        populate: ['user'],
      }
    );
  }

  return ctx.em.getRepository(Question).findAll({
    populate: ['user'],
  });
}

export function getQuestion(id: string, { ctx }: Context) {
  return ctx.em.getRepository(Question).findOneOrFail(
    {
      id,
    },
    {
      populate: ['user'],
    }
  );
}

export async function viewQuestion(id: string, { ctx }: Context) {
  const question = await ctx.em.getRepository(Question).findOneOrFail(
    {
      id,
    },
    {
      populate: ['user'],
    }
  );

  if (ctx.user?.id !== question.user.id) {
    wrap(question).assign({
      views: question.views + 1,
    });
    await ctx.em.persist(question).flush();
  }

  return question;
}

async function vote(id: string, action: QuestionVoteAction, { ctx }: Context) {
  const question = await ctx.em.getRepository(Question).findOneOrFail(
    {
      id,
    },
    {
      populate: ['user'],
    }
  );

  if (!ctx.user?.id) {
    throw new Error('must be logged in to vote');
  }

  if (ctx.user?.id === question.user.id) {
    throw new Error('question authors cannot vote on their own question');
  }

  const questionVote = await ctx.em.getRepository(QuestionVote).findOne({
    question,
    user: ctx.user,
  });

  if (questionVote && questionVote.action === action) {
    // people cannot vote the same direction multiple times
    return question;
  }

  if (questionVote) {
    question.questionVotes.remove(questionVote);
  } else {
    question.questionVotes.add(
      Object.assign(new QuestionVote(), {
        action,
        question,
        user: ctx.user,
      })
    );
  }

  await ctx.em.persist(question).flush();

  return question;
}

export async function upvoteQuestion(id: string, context: Context) {
  return vote(id, QuestionVoteAction.UPVOTE, context);
}

export async function downvoteQuestion(id: string, context: Context) {
  return vote(id, QuestionVoteAction.DOWNVOTE, context);
}

export async function addQuestion(input: Question, { ctx }: Context) {
  // TODO: error handling
  const question = Object.assign(input, {
    user: ctx.user,
  });

  await ctx.em.persist(question).flush();
  return question;
}
