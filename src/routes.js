import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import {
  StateProvider,
} from './store';

import {
  Main,
} from './pages';

import {
  Layout,
} from './components';

export default function Routes() {
  return (
    <StateProvider>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ Main } />
          </Switch>
        </BrowserRouter>
      </Layout>
    </StateProvider>
  );
};
