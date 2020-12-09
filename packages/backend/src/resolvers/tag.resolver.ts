import { Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { Tag } from '../entities';
import { tagService } from '../services';
import { Context } from '../types';

@Resolver(() => Tag)
export class TagResolver {
  @Query(() => [Tag])
  tags(@Ctx() context: Context) {
    return tagService.getTags(context);
  }

  @FieldResolver(() => Number)
  async questionCount(@Root() tag: Tag) {
    return tagService.getTagQuestionCount(tag);
  }
}
