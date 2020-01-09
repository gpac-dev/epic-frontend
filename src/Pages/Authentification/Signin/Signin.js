import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import LOGO from '../../../assets/GPAC-logo-WW.png';

import AuthService from '../../../Services/Auth';

import './Signin.css';

class Signin extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {
        username: '',
        password: '',
      },
      formValid: true
    }
  }

  componentDidMount() {
    document.title = 'EPIC | Signin | v1.0'
    localStorage.getItem("token") !== null ? this.props.history.push('search') : this.props.history.push('signin')
  }

  handleSubmitSignin = (event) => {
    event.preventDefault()

    let { username, password } = this.state;
    
    this.checkValidationSubmit(username, password)

    if(this.validateForm(this.state.errors)) {
      AuthService.signin({ username, password }).then(res => {
        if(res.status === 200){
          if(res.data.twoFactorAuthentication){
            localStorage.setItem("user", JSON.stringify(res.data));
            localStorage.setItem("twoFactorAuthentication", JSON.stringify(res.data.twoFactorAuthentication));
            this.redirectUser(1);
          }else{
            localStorage.setItem("token", JSON.stringify(res.data.token));
            localStorage.setItem("refreshToken", JSON.stringify(res.data.refreshToken));
            this.redirectUser(2);
          }
        }else {
          //this.setState({message: res.message});
        }
      }).catch(err => {
        console.log(err);
      });
    }else{
      this.setState({ formValid: true })
    }
  }

  handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    this.checkValidationKeyDown(name, value);
  }

  checkValidationKeyDown = (name, value) => {
    let { errors } = this.state;

    switch (name) {
      case 'username':
          errors.username = value.length < 7 ? 'Username must be 7 characters long!' : '';
        break;
      case 'password':
          errors.password = value.length < 7 ? 'Password must be 7 characters long!' : '';
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  }

  checkValidationSubmit = (username, password) => {
    let { errors } = this.state;

    if(username === '') {
      errors.username = username.length < 7 ? 'Username is empty!' : '';
      this.setState({ errors, 'username': username });
    }
    if(password === ''){
      errors.password = password.length < 7 ? 'Password is empty!' : '';
      this.setState({ errors, 'password': password });
    }
  }

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    this.setState({formValid: valid})
    return valid;
  }

  redirectUser = (option) => {
    switch(option){
      case 1:
        this.props.history.push('two-factor-authentication');
      break;
      case 2:
        this.props.history.push('search');
      break;
      default:
      break;
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.handleSubmitSignin} noValidate>
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
                <div className={`input-box ${errors.username.length > 0 ? "input-error" : ""}`}>
                  <input type="text" className="username" name="username" onChange={this.handleChange} placeholder="Username" autoComplete="username" noValidate />
                  {errors.username.length > 0 && <span className='input-error-msg'>{errors.username}</span>}
                </div>
                <div className={`input-box ${errors.password.length > 0 ? "input-error" : ""}`}>
                  <input type="password" className="password" name="password" onChange={this.handleChange} placeholder="Password" autoComplete="current-password" noValidate />
                  {errors.password.length > 0 && <span className='input-error-msg'>{errors.password}</span>}
                </div>

                <button className="login-btn" type="submit" disabled={!this.state.formValid}>Sign In</button>
                <Link to="/forgot-password" className="forgot-password">
                  <p>Forgot your password?</p>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Signin;