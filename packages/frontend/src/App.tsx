import React, { useEffect } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { relayEnvironment } from './utils';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthenticatedRoute, Layout, UnauthenticatedRoute } from './components';
import { Ask, FourOhFour, Home, Question, SignIn, SignUp } from './screens';
import { useStore } from './store';

export default function App() {
  const authenticate = useStore((state) => state.authenticate);

  useEffect(() => {
    authenticate();
  });

  // TODO: fix screen flash
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/question/:id" component={Question} />
            <UnauthenticatedRoute path="/sign-in" component={SignIn} />
            <UnauthenticatedRoute path="/sign-up" component={SignUp} />
            <AuthenticatedRoute path="/ask" component={Ask} />
            <Route component={FourOhFour} />
          </Switch>
        </Layout>
      </Router>
    </RelayEnvironmentProvider>
  );
}
