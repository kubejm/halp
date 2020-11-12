import { Entity, Property } from '@mikro-orm/core';
import { Base } from './base.entity';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class User extends Base<User> {
  @Field()
  @Property()
  username!: string;

  @Field()
  @Property()
  email!: string;

  @Property()
  passwordHash!: string;
}
