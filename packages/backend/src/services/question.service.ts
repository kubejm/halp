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

export async function upvoteQuestion(id: string, context: Context) {
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

  const qv = await context.em.getRepository(QuestionVote).findOne({
    question,
    user: context.user,
  });

  if (qv && qv.action === QuestionVoteAction.UP) {
    throw new Error('cannot upvote the same question multiple times');
  }

  const questionVote = Object.assign(new QuestionVote(), {
    action: QuestionVoteAction.UP,
    question,
    user: context.user,
  });

  question.questionVotes.add(questionVote);
  await context.em.persist(question).flush();

  return question;
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
