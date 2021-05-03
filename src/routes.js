import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import {
  StateProvider,
  useStore
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
          <SwitchRouter />
        </Layout>
      </StateProvider>
    </BrowserRouter>
  );
};

function SwitchRouter() {
  const {
    user,
  } = useStore();

  return (
    <Switch>
      {
        user.data
          ? <>
              <Route path="/" exact>
                <Redirect to={ routerConfig.initial } />
              </Route>

              { routerConfig.routes.map( route => <Route key={ route.id } { ...route } />)}
            </>
          : <>
              <Route path="/*" exact>
                <Redirect to={ routerConfig.initial } />
              </Route>

              <Route { ...routerConfig.routes[ 0 ]}/>
            </>
      }
    </Switch>
  );
};
