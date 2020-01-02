import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Signin from '../Pages/Signin/Signin';
import Dashboard from '../Pages/Dashboard/Dashboard';
import NotFound from '../Pages/NotFound/NotFound';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Signin} />
          <Route path="/signin" component={Signin} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;