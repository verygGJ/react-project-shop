export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const doLogin = (username,password,signupData) =>(dispatch) => {
	let error = false;
	return new Promise(function(resolve, reject) {
		signupData.forEach((data) => {
			if (username === data.userDetails.username ) {
				if (password === data.userDetails.password) {
					dispatch({
						type : LOGIN_SUCCESS,
						data : signupData,
						name: data.userDetails.username,
						password: data.userDetails.password,
						error: false
					})
					resolve(1);      
				} else {
					dispatch({
						type : LOGIN_FAILURE,
						data : signupData,
						error: true
					})
					reject(1);
				}
			} else {
				dispatch({
					type : LOGIN_FAILURE,
					data : signupData,
					error: true
				})
				reject(1);
			}
		})  
	})  
}