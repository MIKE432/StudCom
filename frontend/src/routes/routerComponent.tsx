import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';

const Router = () => (
    <Switch>
        {
            routes.map(route => <Route path={route.path} component={route.component} exact={true} />)
        }
    </Switch>


);

export default Router