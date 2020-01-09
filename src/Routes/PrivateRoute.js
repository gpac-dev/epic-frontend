import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import AuthService from '../Services/Auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render = { props => (
      AuthService.getTokenUser() !== null ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: 'signin',
            state: { from: props.location }
          }}
        />
      )
    )}
  />
);

export default PrivateRoute;