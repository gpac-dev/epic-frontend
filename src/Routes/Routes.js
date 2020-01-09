import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute';

import Signin from '../Pages/Authentification/Signin/Signin';
import ForgotPassword from '../Pages/Authentification/ForgotPassword/ForgotPassword';
import TwoFactor from '../Pages/Authentification/TwoFactor/TwoFactor';

import NotFound from '../Pages/NotFound/NotFound';

import Dashboard from '../Pages/Dashboard/Dashboard';
import Search from '../Pages/Search/Search';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/two-factor-authentication" component={TwoFactor} />

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