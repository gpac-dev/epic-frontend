import React, { Component, Fragment } from 'react';

import './TwoFactor.css';

class TwoFactor extends Component {
  constructor(props){
    super(props);
    this.state = {
      code : ''
    }
  }

  componentDidMount() {
    document.title = 'EPIC | Two Factor Authentication | v1.0'
    //localStorage.getItem("token") !== null ? this.props.history.push('search') : this.props.history.push('signin')
  }

  hereClick = () => {
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