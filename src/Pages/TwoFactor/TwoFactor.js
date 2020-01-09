import React, { Component, Fragment } from 'react';

import './TwoFactor.css';

class TwoFactor extends Component {
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
        <h1>Two Factor Authentication</h1>
        <button onClick={this.hereClick}>Here!</button>
      </Fragment>
    );
  }
}

export default TwoFactor;