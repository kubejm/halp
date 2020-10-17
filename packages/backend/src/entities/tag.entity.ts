import { Collection, Entity, ManyToMany, Property } from '@mikro-orm/core';
import { Base } from './base.entity';
import { Question } from './question.entity';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Tag extends Base<Tag> {
  @Field()
  @Property()
  name!: string;

  @Field(() => [Question])
  @ManyToMany(() => Question, (q: Question) => q.tags)
  questions = new Collection<Question>(this);

  constructor() {
    super();
  }
}
