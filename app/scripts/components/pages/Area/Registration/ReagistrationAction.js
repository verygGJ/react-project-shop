export const SAVE_REG_DATA = 'SAVE_REG_DATA';

export const saveData = (fullname,username,email,password) => (dispatch) => {
   const data = {
   	"fullname" : fullname,
   	"username" : username,
   	"email" : email,
   	"password": password
   }
  return new Promise(function(resolve, reject){
    dispatch({
        type : SAVE_REG_DATA,
        data : data
    })
    resolve(1);
  })
}