import { connect } from 'react-redux';
import { saveData } from './ReagistrationAction';  
import RegistrationForm from './RegistrationForm';

const mapDispatchToProps = {
	saveData
}

const mapStateToProps = state => ({
	signup : state.signup ? state.signup : {} 
})

const RegistrationFormComp = connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
export default RegistrationFormComp;