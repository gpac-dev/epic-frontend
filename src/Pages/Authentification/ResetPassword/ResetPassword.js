import React, { Component, Fragment } from 'react';

import './ResetPassword.css';

class ResetPassword extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  hereClick = () => {
    this.props.history.push('search');
  }

  render() {
    return (
      <Fragment>
        <h1>ResetPassword</h1>
        <button onClick={this.hereClick}>Here!</button>
      </Fragment>
    );
  }
}

export default ResetPassword;