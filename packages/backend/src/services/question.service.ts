import { wrap, QueryOrder } from '@mikro-orm/core';
import { Question, QuestionVote, VoteAction, Answer, Tag } from '../entities';
import { Context } from '../types';

export enum QuestionOrderBy {
  NEW = 'new',
  ACTIVE = 'active',
  VIEWS = 'views',
  VOTES = 'votes',
}

interface GetQuestionsOptions {
  tag?: string;
  orderBy?: QuestionOrderBy;
  page?: number;
  pageSize?: number;
}

export async function getQuestions(
  { ctx }: Context,
  options?: GetQuestionsOptions
) {
  const { tag, orderBy, page, pageSize } = {
    ...{ pageSize: 15, page: 1, orderBy: QuestionOrderBy.NEW },
    ...options,
  };

  const where = {
    ...(tag && { tags: { name: tag } }),
  };

  const findOptions = {
    orderBy: {
      ...(orderBy === QuestionOrderBy.ACTIVE && {
        updatedAt: QueryOrder.DESC,
      }),
      ...(orderBy === QuestionOrderBy.NEW && {
        createdAt: QueryOrder.DESC,
      }),
      ...(orderBy === QuestionOrderBy.VIEWS && {
        views: QueryOrder.DESC,
      }),
      ...(orderBy === QuestionOrderBy.VOTES && {
        votes: QueryOrder.DESC,
      }),
    },
    limit: pageSize,
    offset: (page - 1) * pageSize,
  };

  const [questions, count] = await ctx.em
    .getRepository(Question)
    .findAndCount(where, findOptions);

  const pageCount = Math.ceil(count / pageSize);

  return [questions, count, pageCount];
}

export function getQuestion(id: string, { ctx }: Context) {
  return ctx.em.getRepository(Question).findOneOrFail({
    id,
  });
}

export async function viewQuestion(id: string, { ctx }: Context) {
  const question = await ctx.em.getRepository(Question).findOneOrFail({
    id,
  });

  if (ctx.user?.id !== question.user.id) {
    wrap(question).assign({
      views: question.views + 1,
    });
    await ctx.em.persist(question).flush();
  }

  return question;
}

async function vote(id: string, action: VoteAction, { ctx }: Context) {
  const question = await ctx.em.getRepository(Question).findOneOrFail({
    id,
  });

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
    question.votes.remove(questionVote);
  } else {
    question.votes.add(
      Object.assign(new QuestionVote(), {
        action,
        question,
        user: ctx.user,
      })
    );
  }

  question.voteCount += action === VoteAction.UPVOTE ? 1 : -1;

  await ctx.em.persist(question).flush();

  return question;
}

export async function upvoteQuestion(id: string, context: Context) {
  return vote(id, VoteAction.UPVOTE, context);
}

export async function downvoteQuestion(id: string, context: Context) {
  return vote(id, VoteAction.DOWNVOTE, context);
}

export async function addQuestion(
  { ctx }: Context,
  input: Question,
  tags: string[] = []
) {
  // TODO: error handling
  const question = Object.assign(input, {
    user: ctx.user,
  });

  for (const name of tags) {
    const tag = await ctx.em.getRepository(Tag).findOne({
      name,
    });

    if (tag) {
      question.tags.add(tag);
    } else {
      question.tags.add(
        Object.assign(new Tag(), {
          name,
          question,
        })
      );
    }
  }

  await ctx.em.persist(question).flush();
  return question;
}

export async function getQuestionCount({ ctx }: Context) {
  return ctx.em.getRepository(Question).count();
}

export async function answerQuestion(
  id: string,
  answer: string,
  { ctx }: Context
) {
  const question = await ctx.em.getRepository(Question).findOneOrFail({
    id,
  });

  question.answers.add(
    Object.assign(new Answer(), {
      body: answer,
      question,
      user: ctx.user,
    })
  );

  question.answerCount += 1;

  await ctx.em.persist(question).flush();

  return question;
}
