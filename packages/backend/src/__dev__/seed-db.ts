import { MikroORM } from '@mikro-orm/core';
import { Question, Tag } from '../entities';
import ormConfig from '../orm.config';
import questions from './fixtures/questions.json';

async function seed() {
  const orm = await MikroORM.init(ormConfig);

  for (const q of questions) {
    const question = new Question({
      author: q.author,
      body: q.body,
      question: q.question,
    });

    q.tags.forEach((t) => {
      const tag = new Tag({
        name: t.name,
      });
      question.tags.add(tag);
    });

    await orm.em.persist(question).flush();
  }

  await orm.close();
}

seed().catch(console.error);
