import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Resolver,
} from 'type-graphql';
import { User } from '../entities';
import { Context } from '../types';
import jwt from 'jsonwebtoken';

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
  @Mutation(() => Result)
  async signUp(
    @Arg('input') input: SignUpInput,
    @Ctx() context: Context
  ): Promise<Result> {
    // TODO: abstract this out
    const user = new User();
    user.username = input.username;
    user.email = input.email;

    // TODO: make this more secure
    user.passwordHash = input.password;

    await context.em.persist(user).flush();

    return new Result();
  }

  @Mutation(() => Result)
  async signIn(
    @Arg('input') input: SignInInput,
    @Ctx() context: Context
  ): Promise<Result> {
    // TODO: abstract this out
    const userRepository = context.em.getRepository(User);
    const user = await userRepository.findOne({
      username: input.username,
    });

    if (user === null) {
      throw new Error('user not found');
    }

    // TODO: make this more secure
    if (user.passwordHash !== input.password) {
      throw new Error('incorrect password');
    }

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
  async signOut(@Ctx() context: Context): Promise<Result> {
    // TODO: abstract this out
    context.ctx.cookies.set('token', '', {
      httpOnly: false,
      secure: false,
    });

    return new Result();
  }
}
