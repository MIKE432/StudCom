import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';

const Router = (props: Record<string, any>) => (
  <Switch>
      {
          props.isUserLoggedIn ? routes.loggedUser.map((route: any, key: number) => <Route key={key}  path={route.path} component={route.component} exact={true} />) : 
          routes.unloggedUser.map((route: any, key: number) => <Route key={key}  path={route.path} component={route.component} exact={true} />)
      }
  </Switch>


);

export default Router;
