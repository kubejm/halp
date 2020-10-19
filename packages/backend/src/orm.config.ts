import { MikroORM } from '@mikro-orm/core';

// TODO: inject with environment variables
export default {
  entities: ['./src/entities'],
  dbName: 'postgres',
  type: 'postgresql',
  host: 'postgres',
  port: 5432,
  user: 'postgres',
  password: 'halp',
} as Parameters<typeof MikroORM.init>[0];
