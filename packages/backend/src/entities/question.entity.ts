import { Collection, Entity, ManyToMany, Property } from '@mikro-orm/core';
import { Field, ObjectType } from 'type-graphql';
import { QuestionValidator } from '../validators';
import { Base } from './base.entity';
import { Tag } from './tag.entity';

@ObjectType()
@Entity()
export class Question extends Base<Question> {
  @Field()
  @Property()
  answers: number = 0;

  @Field()
  @Property()
  author!: string;

  @Field()
  @Property({ type: 'text' })
  body!: string;

  @Field()
  createdAtRelative!: string;

  @Field()
  excerpt!: string;

  @Field()
  @Property()
  question!: string;

  @Field(() => [Tag])
  @ManyToMany({ entity: () => Tag, eager: true })
  tags = new Collection<Tag>(this);

  @Field()
  @Property()
  views: number = 0;

  @Field()
  @Property()
  votes: number = 0;

  constructor(input: QuestionValidator) {
    super(input);
  }
}
