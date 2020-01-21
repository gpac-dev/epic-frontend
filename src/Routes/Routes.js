import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute';

import Signin from '../Pages/Authentification/Signin/Signin';
import ForgotPassword from '../Pages/Authentification/ForgotPassword/ForgotPassword';
import ResetPassword from '../Pages/Authentification/ResetPassword/ResetPassword';
import TwoFactorAuthentication from '../Pages/Authentification/TwoFactorAuthentication/TwoFactorAuthentication';

import NotFound from '../Pages/NotFound/NotFound';

import Dashboard from '../Pages/Dashboard/Dashboard';
import Search from '../Pages/Search/Search';
import InternetConnection from '../Helpers/InternetConnection';

class Routes extends Component {
  render() {
    return (
      <Router>
        <InternetConnection />
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/account/forgot-password" component={ForgotPassword} />
          <Route exact path="/account/reset-password/:hash" component={ResetPassword} />
          <Route exact path="/account/two-factor-authentication" component={TwoFactorAuthentication} />

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