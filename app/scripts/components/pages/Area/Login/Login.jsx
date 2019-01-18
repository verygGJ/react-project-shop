import React from 'react';
import { connect } from 'react-redux'
import { Link, Redirect, Route } from 'react-router-dom';

import AreaPage from './../AreaPage';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        username : '',
        password : '',
        error: false,
        redirect: false,
        isAuthenticated: false
      }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.doLogin(this.state.username,this.state.password,this.props.signup).then(() => {
      this.setState({
        redirect : true,
        isAuthenticated: true
      })
      alert('YOU ARE LOGIN');
    }).catch(()=> {
      this.setState({
        error : true
      })
      alert('ERROR LOGIN');
    })
  }

	render() {

    if (this.state.redirect) {
      console.log(this.state.redirect);
      return <Redirect push to='/area' />
    } else {
      return(
        <div className="login-wrapper">
          <div className="form-container">

            {this.state.error == true ? <p className="alert alert-danger">Username or Password is invalid</p>
                                      : null
            }

            <form className="login-form" onSubmit={this.handleSubmit}>

              <div className="form-block">
                <label>User Name</label>
                <input type="text"
                       name="username"
                       className="main-input"
                       value={this.state.username}
                       onChange={this.handleChange}
                       required
                />
              </div>

              <div className="form-block">
                <label>Password</label>
                <input type="password"
                       name='password'
                       className="main-input"
                       onChange={this.handleChange}
                       required
                />
              </div>
              <button type="submit" className="submit-btn">Sign In</button>
            </form>

            <div className="form-nav">
              <Link to="/register">Registration</Link>
            </div>

          </div>
        </div>
			)
    }

	}
}



function mapStateToProps (state) {
  return {
    logged: state.error
  }
}

export const Connection = connect(mapStateToProps)(AreaPage);
