import React, { Component, Fragment } from 'react';

import './TwoFactorAuthentication.css';

class TwoFactorAuthentication extends Component {
  constructor(props){
    super(props);
    this.state = {
      code : '',
      user: {},
      token: '',
      refreshToken: ''
    }
  }

  componentDidMount() {
    document.title = 'EPIC | Two Factor Authentication | v1.0'

    let user = JSON.parse(localStorage.getItem("user"))

    if(localStorage.getItem("twoFactorAuthentication")){
      this.setState({ user : Object.assign({ username : user?.username, email : user?.email }) })
      this.setState({ token : user?.token })
      this.setState({ refreshToken: user?.refreshToken })

      //Send post api for get code authentication with email 
    }else{
      this.props.history.push('search')
    }
  }

  hereClick = () => {
    localStorage.clear()
    
    localStorage.setItem("user", JSON.stringify(this.state.user))
    localStorage.setItem("token", JSON.stringify(this.state.token))
    localStorage.setItem("refreshToken", JSON.stringify(this.state.refreshToken))

    this.props.history.push('search')
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

export default TwoFactorAuthentication;