import { wrap } from '@mikro-orm/core';
import { Question, QuestionVote, QuestionVoteAction } from '../entities';
import { Context } from '../types';

export function getAllQuestions(context: Context) {
  return context.em.getRepository(Question).findAll({
    populate: ['user'],
  });
}

export function getQuestion(id: string, context: Context) {
  return context.em.getRepository(Question).findOneOrFail(
    {
      id,
    },
    {
      populate: ['user'],
    }
  );
}

export async function viewQuestion(id: string, context: Context) {
  const question = await context.em.getRepository(Question).findOneOrFail(
    {
      id,
    },
    {
      populate: ['user'],
    }
  );

  if (context.user?.id !== question.user.id) {
    wrap(question).assign({
      views: question.views + 1,
    });
    await context.em.persist(question).flush();
  }

  return question;
}

async function vote(id: string, action: QuestionVoteAction, context: Context) {
  const question = await context.em.getRepository(Question).findOneOrFail(
    {
      id,
    },
    {
      populate: ['user'],
    }
  );

  if (!context.user?.id) {
    throw new Error('must be logged in to vote');
  }

  if (context.user?.id === question.user.id) {
    throw new Error('question authors cannot vote on their own question');
  }

  const questionVote = await context.em.getRepository(QuestionVote).findOne({
    question,
    user: context.user,
  });

  if (questionVote && questionVote.action === action) {
    const actionName =
      action === QuestionVoteAction.UPVOTE ? 'upvote' : 'downvote';
    throw new Error(`cannot ${actionName} the same question multiple times`);
  }

  if (questionVote) {
    question.questionVotes.remove(questionVote);
  } else {
    question.questionVotes.add(
      Object.assign(new QuestionVote(), {
        action,
        question,
        user: context.user,
      })
    );
  }

  await context.em.persist(question).flush();

  return question;
}

export async function upvoteQuestion(id: string, context: Context) {
  return vote(id, QuestionVoteAction.UPVOTE, context);
}

export async function downvoteQuestion(id: string, context: Context) {
  return vote(id, QuestionVoteAction.DOWNVOTE, context);
}

export async function addQuestion(input: Question, context: Context) {
  // TODO: error handling
  const user = context.user;
  const question = Object.assign(input, {
    user,
  });

  await context.em.persist(question).flush();
  return question;
}
