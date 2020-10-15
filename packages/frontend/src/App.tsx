import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from './components';
import { Home } from './screens';

export default function App() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
      </Layout>
    </Router>
  );
}
