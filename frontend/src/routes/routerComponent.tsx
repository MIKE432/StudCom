import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import { ChangeUserMethods } from '../types/generalTypes';

const Router = (props: ChangeUserMethods) => (
  <Switch>
    {
      routes.map((route, key) => <Route key={key}  path={route.path} component={() => <route.component {...props} />} exact />)
    }
  </Switch>


);

export default Router;
