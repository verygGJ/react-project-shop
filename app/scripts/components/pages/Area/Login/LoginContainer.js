import { connect } from 'react-redux';
import { doLogin } from './LoginAction';  
import Login from './Login';

const mapDispatchToProps = {
	doLogin
}

const mapStateToProps = state => ({
	signup : state.signup ? state.signup : {},
	login : state.login ?  state.login : {},
	error : state.login.error ? state.login.error : {},
})

const LoginFormComp = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginFormComp;