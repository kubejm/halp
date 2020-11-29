import React from 'react';
import {
  Route,
  RouteComponentProps,
  RouteProps,
  Redirect,
} from 'react-router-dom';

interface ConditionalComponentProps extends RouteComponentProps {
  component?: React.ComponentType<any>;
  condition: boolean;
  fallback: string;
}

function ConditionalComponent({
  component: Component,
  condition,
  fallback,
}: ConditionalComponentProps) {
  if (!condition) {
    return <Redirect to={fallback} />;
  }

  if (!Component) {
    return null;
  }

  return <Component />;
}

interface ConditionalRouteProps extends RouteProps {
  condition: boolean;
  fallback: string;
}

export default function ConditionalRoute({
  component,
  condition,
  fallback,
  ...rest
}: ConditionalRouteProps) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <ConditionalComponent
          key={props.match.params.id || 'empty'}
          component={component}
          condition={condition}
          fallback={fallback}
          {...props}
        />
      )}
    />
  );
}
