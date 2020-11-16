import React, { useEffect } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { relayEnvironment } from './utils';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from './components';
import { Ask, Home, SignIn, SignUp } from './screens';
import { useStore } from './store';

export default function App() {
  const authenticate = useStore((state) => state.authenticate);

  useEffect(() => {
    authenticate();
  });

  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Router>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/ask" component={Ask} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Layout>
      </Router>
    </RelayEnvironmentProvider>
  );
}
