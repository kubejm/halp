import { MikroORM } from '@mikro-orm/core';

export default {
  entities: ['./src/entities'],
  dbName: 'postgres',
  type: 'postgresql',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
} as Parameters<typeof MikroORM.init>[0];
