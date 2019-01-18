import { LOGIN_SUCCESS , LOGIN_FAILURE } from './LoginAction';

const initialState = {
	userData : {},
	error : false
}
	
export default function loginFormReducer(state=initialState , action) {
	switch(action.type) {
		case LOGIN_SUCCESS :
			return [
				...state,
				{ userData : action.data,
					error : action.error
				}
			]
		case LOGIN_FAILURE :
			return [
				...state,
				state = 0,
				{ 
					error : action.error
				}
			]
		default:
      return state
	}
}