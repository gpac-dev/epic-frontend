import React, { Component, Fragment } from 'react';
import './Signin.css';
import LOGO from '../../assets/GPAC-logo-WW.png';

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Signin extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {
        username: '',
        password: '',
      }
    }
  }

  componentDidMount() {
    document.title = 'EPIC | Signin | v1.0'
    localStorage.clear();
  }

  handleSubmitSignin = (event) => {
    event.preventDefault();
    let { username, password } = this.state;
    console.log(username, password);

    console.log(this.state.errors);
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
      //this.redirectUser();
    }else{
      console.error('Invalid Form')
    }
  }

  handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;

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

  redirectUser = () => {
    this.props.history.push('dashboard');
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
                <div className="login-form">
                  <div>
                    <input type="text" className="username" name="username" onChange={this.handleChange} placeholder="Username" autoComplete="username" noValidate />
                    {errors.username.length > 0 && <span className='error'>{errors.username}</span>}
                  </div>
                  <div>
                    <input type="password" className="password" name="password" onChange={this.handleChange} placeholder="Password" autoComplete="current-password" noValidate />
                    {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                  </div>

                  <button className="login-btn" type="submit">Sign In</button>
                  <p>Forgot your password?</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Signin;