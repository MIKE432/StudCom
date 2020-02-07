import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

const Router = () => (
  <BrowserRouter>
    <Switch>
        {
            routes.map(route => <Route path={route.path} component={route.component} exact={true} />)
        }
    </Switch>
  </BrowserRouter>

);

export default Router