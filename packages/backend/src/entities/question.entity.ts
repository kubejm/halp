import { Collection, Entity, ManyToMany, Property } from '@mikro-orm/core';
import { Field, ObjectType } from 'type-graphql';
import { Base } from './base.entity';
import { Tag} from './tag.entity';

@ObjectType()
@Entity()
export class Question extends Base<Question> {
  @Field()
  @Property()
  answers!: number;

  @Field()
  @Property()
  author!: string;

  @Field()
  @Property()
  body!: string;

  @Field()
  @Property()
  question!: string;

  @Field(() => [Tag])
  @ManyToMany(() => Tag)
  tags = new Collection<Tag>(this);

  @Field()
  @Property()
  views!: number;

  @Field()
  @Property()
  votes!: number;

  constructor() {
    super();
  }
}


