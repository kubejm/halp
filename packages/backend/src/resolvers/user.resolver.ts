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
import jwt from 'jsonwebtoken';
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
    // TODO: rename this to getUser instead of getProfile?
    return userService.getProfile(context);
  }

  @Mutation(() => Result)
  async signUp(
    @Arg('input') input: SignUpInput,
    @Ctx() context: Context
  ): Promise<Result> {
    // TODO: abstract this out
    const user = new User();
    user.username = input.username;
    user.email = input.email;

    // TODO: do not create users with the same name or email

    // TODO: make this more secure
    user.passwordHash = input.password;

    await context.em.persist(user).flush();

    // TODO: duplication with signIn
    const token = jwt.sign(
      {
        roles: ['user'],
      },
      'topsecret',
      {
        algorithm: 'HS256',
        subject: user.id,
        expiresIn: '1d',
      }
    );

    context.ctx.cookies.set('token', token, {
      httpOnly: false,
      secure: false,
    });

    return new Result();
  }

  @Mutation(() => Result)
  async signIn(
    @Arg('input') input: SignInInput,
    @Ctx() context: Context
  ): Promise<Result> {
    // TODO: return value for signIn?
    await userService.signIn(input.username, input.password, context);
    return new Result();
  }

  @Mutation(() => Result)
  async signOut(@Ctx() context: Context): Promise<Result> {
    // TODO: return value for signOut?
    userService.signOut(context);
    return new Result();
  }
}
