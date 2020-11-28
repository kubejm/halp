import React from 'react';
import {
  Route,
  RouteComponentProps,
  RouteProps,
  Redirect,
} from 'react-router-dom';
import { useStore } from '../../store';

interface UnauthenticatedComponentProps extends RouteComponentProps {
  component?: React.ComponentType<any>;
}

function UnauthenticatedComponent({
  component: Component,
}: UnauthenticatedComponentProps) {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  if (!Component) {
    return null;
  }

  return <Component />;
}

export default function UnauthenticatedRoute({
  component,
  ...rest
}: RouteProps) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <UnauthenticatedComponent
          key={props.match.params.id || 'empty'}
          component={component}
          {...props}
        />
      )}
    />
  );
}
