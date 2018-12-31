import * as React from 'react';
import { Route, Switch } from 'react-router'
import HomePage from '../containers/HomePage';


const routes = (
  <div>
      <Switch>
        {/* <ProtectedRoute exact={true} path={process.env.REACT_APP_SITE_RELATIVE_URL + "/"} component={HomePage} /> */}
        <Route exact={true} path={ "/"} component={HomePage} />
      </Switch>
  </div>
)

export default routes;
