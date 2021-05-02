import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import {
  StateProvider,
} from './store';

import routerConfig from './config/routes';

import {
  Layout,
} from './components';

export default function Routes() {
  return (
    <BrowserRouter>
      <StateProvider>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Redirect to={ routerConfig.initial } />
            </Route>

            { routerConfig.routes.map( route => <Route key={ route.id } { ...route } />)}
          </Switch>
        </Layout>
      </StateProvider>
    </BrowserRouter>
  );
};
