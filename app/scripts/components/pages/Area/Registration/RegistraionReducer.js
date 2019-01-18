import { SAVE_REG_DATA } from './ReagistrationAction';

const initialState = {
	userDetails : []
}
	
export default function registraionFormReducer(state = initialState , action) {
	switch(action.type) {
		case SAVE_REG_DATA :
		return [
			...state,
      { userDetails : action.data}
	 	]
		default:
      return state
	}
}