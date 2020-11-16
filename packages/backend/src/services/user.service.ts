import { Context } from '../types';

export function getProfile(context: Context) {
  return context.user;
}

export function signOut(context: Context) {
  context.ctx.cookies.set('token', '', {
    httpOnly: false,
    secure: false,
  });
}
