import React from 'react';
import ConditionalRoute from './ConditionalRoute';
import { useStore } from '../../store';
import { RouteProps } from 'react-router-dom';

export default function UnauthenticatedRoute(props: RouteProps) {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return (
    <ConditionalRoute condition={!isAuthenticated} fallback="/" {...props} />
  );
}
