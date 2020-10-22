import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { relayEnvironment } from './utils';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from './components';
import { Home } from './screens';

export default function App() {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Router>
        <Layout>
          <Route exact path="/" component={Home} />
        </Layout>
      </Router>
    </RelayEnvironmentProvider>
  );
}
