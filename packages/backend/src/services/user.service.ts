import { User } from '../entities';
import { Context } from '../types';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { ServerValidationError } from '../utils';
import { AuthenticationError } from 'apollo-server-koa';

function setCookieToken(subject: string, { ctx }: Context) {
  const token = jwt.sign(
    {
      roles: ['user'],
    },
    'topsecret',
    {
      algorithm: 'HS256',
      subject,
      expiresIn: '1d',
    }
  );

  ctx.cookies.set('token', token, {
    httpOnly: false,
    secure: false,
  });
}

export function getProfile({ ctx }: Context) {
  if (ctx.user === undefined) {
    throw new AuthenticationError('no authenticated user');
  }

  return ctx.user;
}

export interface SignUpInput {
  username: string;
  email: string;
  password: string;
}

export async function signUp(input: SignUpInput, context: Context) {
  const userRepository = context.ctx.em.getRepository(User);

  const username = input.username;
  const usernameExists = (await userRepository.count({ username })) > 0;
  if (usernameExists) {
    throw new ServerValidationError('username', {
      isUnique: 'username already registered',
    });
  }

  const email = input.email;
  const emailUsed = (await userRepository.count({ email })) > 0;
  if (emailUsed) {
    throw new ServerValidationError('email', {
      isUnique: 'email already registered',
    });
  }

  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(input.password, salt);

  const user = Object.assign(new User(), {
    username: input.username,
    email: input.email,
    passwordHash,
  });

  await context.ctx.em.persist(user).flush();

  setCookieToken(user.id, context);
}

export async function signIn(
  username: string,
  password: string,
  context: Context
) {
  const userRepository = context.ctx.em.getRepository(User);
  const user = await userRepository.findOne({
    username,
  });

  if (user === null) {
    throw new ServerValidationError('username', {
      isUnique: 'user not found',
    });
  }

  if (!bcrypt.compareSync(password, user.passwordHash)) {
    throw new ServerValidationError('password', {
      isUnique: 'incorrect password',
    });
  }

  setCookieToken(user.id, context);
}

export function signOut({ ctx }: Context) {
  ctx.cookies.set('token', '', {
    httpOnly: false,
    secure: false,
  });
}
