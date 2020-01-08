import React, { Component, Fragment } from 'react';
import './Signin.css';
import LOGO from '../../assets/GPAC-logo-WW.png';

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
    //localStorage.clear();

    localStorage.getItem("token") !== null ? this.props.history.push('search') : this.props.history.push('signin')
  }

  handleSubmitSignin = (event) => {
    event.preventDefault();

    let { username, password } = this.state;
    console.log(username, password);

    if(this.validateForm(this.state.errors) && username && password) {
      console.info('Valid Form')
      localStorage.setItem('token', '31ASR1A31RAF')
      this.redirectUser();
    }else{
      console.error('Invalid Form')
    }
  }

  handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    console.log(name, value);

    this.checkValidation(name, value);
  }

  checkValidation = (name, value) => {
    let errors = this.state.errors;

    switch (name) {
      case 'username':
        errors.username =
          value.length < 8
            ? 'Full Name must be 8 characters long!'
            : '';
        break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  }

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    this.setState({formValid: valid})
    return valid;
  }

  redirectUser = () => {
    this.props.history.push('search');
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
                <p>Forgot your password?</p>
              </div>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Signin;