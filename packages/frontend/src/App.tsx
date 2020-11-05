import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { relayEnvironment } from './utils';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from './components';
import { Ask, Home, Login } from './screens';

export default function App() {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Router>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/ask" component={Ask} />
          <Route path="/login" component={Login} />
        </Layout>
      </Router>
    </RelayEnvironmentProvider>
  );
}
