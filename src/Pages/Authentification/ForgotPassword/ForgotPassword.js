import React, { Component, Fragment } from 'react';

import './ForgotPassword.css';

class ForgotPassword extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  hereClick(){
    this.props.history.push('search');
  }

  render() {
    return (
      <Fragment>
        <h1>ForgotPassword</h1>
        <button onClick={this.hereClick}>Here!</button>
      </Fragment>
    );
  }
}

export default ForgotPassword;