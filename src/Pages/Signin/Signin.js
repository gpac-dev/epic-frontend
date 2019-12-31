import React, { Component } from 'react';
import './Signin.css';
import LOGO from '../../assets/GPAC-logo-WW.png';

class Signin extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      message: '',
    }
    this.signin = this.signin.bind(this);
  }

  componentDidMount() {
    document.title = 'EPIC | Signin | v1.0'
    localStorage.clear();
  }

  signin = (e) => {
    e.preventDefault();
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <React.Fragment>
        <div className="login-cont">
          <div className="login-cont-left">
            <div className="login-quote">
              <p>Do more than just work for a living</p>
            </div>
          </div>
          <div className="login-cont-right">
            <div className="login-logo">
              <img src={LOGO} alt="Gpac" />
            </div>
            <div className="login-form">
              <div className="login-form">
                <input type="text" className="username" placeholder="Username" />
                <input type="password" className="password" placeholder="Password" />
                <button className="login-btn" onClick={this.signin}>Sign In</button>
                <p>Forgot your password?</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signin;