import React from 'react';
import { HashRouter, Link } from 'react-router-dom';


export default class RegistrationForm extends React.Component {
	constructor(props){
		super(props);
      this.state = {
        fullname: '',
        username: '',
        email: '',
        password: '',
        signUpSuccess: false
      }
	    this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e){
		this.setState({[e.target.name] : e.target.value})
	}
	handleSubmit(e) {
		e.preventDefault();
      this.props.saveData(this.state.fullname,this.state.username,this.state.email,this.state.password).then(()=>{
        console.log(this.props.signup);
        this.setState({ signUpSuccess:true });
        this.setState({
          fullname: '',
          username: '',
          email: '',
          password: ''
        })
    })
	}
	render() {
		return(
        <div className="registration-wrapper">
          <div className="form-container">

            <form className="registration-form" onSubmit={this.handleSubmit}>
              <div className="form-block">
                <label>Full Name</label>
                <input type="text" name='fullname' className="main-input" value={this.state.fullname} onChange={this.handleChange} required />
              </div>
              <div className="form-block">
                <label>User Name</label>
                <input type="text" name='username' className="main-input" value={this.state.username} onChange={this.handleChange} required />
              </div>
              <div className="form-block">
                <label>Email</label>
                <input type="email" name='email' className="main-input" value={this.state.email} onChange={this.handleChange} required />
              </div>
              <div className="form-block">
                <label>Password</label>
                <input type="password" name='password' className="main-input" value={this.state.password} onChange={this.handleChange}  required />
              </div>
              <button type="submit"  className="submit-btn">Registration</button>
            </form> 

            <div className="form-nav">
              <Link to="/area">Login</Link>
            </div>

            {this.state.signUpSuccess ? <div className="alert alert-success"><p>Ваш аккаунт создан</p></div> 
                                      : null}         
          </div>
        </div>
			)
	}
}