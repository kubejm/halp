import React from 'react';
import { auth } from '../../../../utils';
import { Redirect } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      auth.signOut();
      return <Redirect to="/sign-in" />;
    }

    return this.props.children;
  }
}
