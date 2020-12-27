import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { relayEnvironment } from './utils';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthenticatedRoute, Layout, UnauthenticatedRoute } from './components';
import {
  AskScreen,
  FourOhFourScreen,
  QuestionScreen,
  QuestionsScreen,
  SignInScreen,
  SignUpScreen,
  TagsScreen,
} from './screens';
import { useStore } from './store';

export default function App() {
  useStore((state) => state.authenticate)();

  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={QuestionsScreen} />
            <Route path="/question/:id" component={QuestionScreen} />
            <Route path="/tags" component={TagsScreen} />
            <Route path="/questions/tagged/:tag" component={QuestionsScreen} />
            <UnauthenticatedRoute path="/sign-in" component={SignInScreen} />
            <UnauthenticatedRoute path="/sign-up" component={SignUpScreen} />
            <AuthenticatedRoute path="/ask" component={AskScreen} />
            <Route component={FourOhFourScreen} />
          </Switch>
        </Layout>
      </Router>
    </RelayEnvironmentProvider>
  );
}
