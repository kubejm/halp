import { Ctx, Query, Resolver } from 'type-graphql';
import { Question } from '../entities';
import { Context } from '../types';

const questions =
[
  {
    "askedTime": "asked 1 min ago",
    "author": "matt",
    "excerpt": "I do not know how to use. How do I do it?",
    "question": "How do I git?",
    "tags": [{ "label": "git" }],
    "votes": 5,
    "answers": 2,
    "views": 120
  },
  {
    "askedTime": "asked 6 min ago",
    "author": "matt",
    "excerpt": "I do not know how to use. How do I do it?",
    "question": "How do I git?",
    "tags": [{ "label": "git" }],
    "votes": 100,
    "answers": 10,
    "views": 300
  },
  {
    "askedTime": "asked 4 min ago",
    "author": "matt",
    "excerpt": "I do not know how to use. How do I do it?",
    "question": "How do I git?",
    "tags": [{ "label": "git" }],
    "votes": 0,
    "answers": 0,
    "views": 5
  }
];

@Resolver(() => Question)
export class QuestionResolver {
  @Query(() => [Question])
  questions(@Ctx() ctx: Context) {
    return ctx.em.getRepository(Question).findAll();
  }
}
