import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';

const Router = (props: Record<string, any>) => (
  <Switch>
      {
          routes.filter(route => props.isUserLoggedIn === route.isUserLoggedIn).map((route, key) => <Route key={key}  path={route.path} component={() => <route.component />} exact />) 
      }
  </Switch>


);

export default Router;
