import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { User } from '../entities';
import { Context } from '../types';
import { userService } from '../services';

@ObjectType()
class Result {
  @Field()
  ok: boolean = true;
}

@InputType()
class SignUpInput {
  @Field()
  username!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;
}

@InputType()
class SignInInput {
  @Field()
  username!: string;

  @Field()
  password!: string;
}

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  async profile(@Ctx() context: Context): Promise<User> {
    return userService.getProfile(context);
  }

  @Mutation(() => Result)
  async signUp(
    @Arg('input') input: SignUpInput,
    @Ctx() context: Context
  ): Promise<Result> {
    await userService.signUp(input, context);
    return new Result();
  }

  @Mutation(() => Result)
  async signIn(
    @Arg('input') input: SignInInput,
    @Ctx() context: Context
  ): Promise<Result> {
    await userService.signIn(input.username, input.password, context);
    return new Result();
  }

  @Mutation(() => Result)
  async signOut(@Ctx() context: Context): Promise<Result> {
    userService.signOut(context);
    return new Result();
  }
}
