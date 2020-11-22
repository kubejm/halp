import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { auth } from '../../utils';

export default function AuthenticatedRoute(props: RouteProps) {
  const isAuthenticated = auth.isAuthenticated();

  if (!isAuthenticated) {
    return <Redirect to="/sign-in" />;
  }

  console.log(props);

  return <Route {...props} />;
}
