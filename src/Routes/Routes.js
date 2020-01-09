import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Signin from '../Pages/Signin/Signin';

import NotFound from '../Pages/NotFound/NotFound';
// import ListRoutes from './ListRoutes';
import PrivateRoute from './PrivateRoute';

import Dashboard from '../Pages/Dashboard/Dashboard';
import Search from '../Pages/Search/Search';
import TwoFactor from '../Pages/TwoFactor/TwoFactor';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/forgot-password" component={Signin} />
          <Route exact path="/two-factor-authentication" component={TwoFactor} />

          {/* ListRoutes.map(props => <Route {...props} /> )*/}

          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/search" component={Search} />


          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;