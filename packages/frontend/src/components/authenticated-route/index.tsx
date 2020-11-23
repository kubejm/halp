import React from 'react';
import {
  Route,
  RouteComponentProps,
  RouteProps,
  Redirect,
} from 'react-router-dom';
import { auth } from '../../utils';

interface AuthenticatedComponentProps extends RouteComponentProps {
  component?: React.ComponentType<any>;
}

function AuthenticatedComponent({
  component: Component,
}: AuthenticatedComponentProps) {
  const isAuthenticated = auth.isAuthenticated();

  if (!isAuthenticated) {
    return <Redirect to="/sign-in" />;
  }

  if (!Component) {
    return null;
  }

  return <Component />;
}

export default function AuthenticatedRoute({ component, ...rest }: RouteProps) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <AuthenticatedComponent
          key={props.match.params.id || 'empty'}
          component={component}
          {...props}
        />
      )}
    />
  );
}
