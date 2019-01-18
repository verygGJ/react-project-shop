import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import registraionFormReducer from '../pages/Area/Registration/RegistraionReducer';
import loginFormReducer from '../pages/Area/Login/LoginReducer';

import { saveState , loadState } from './localStorage';


const reducer = combineReducers({
   signup : registraionFormReducer,
   login : loginFormReducer
});


const INITIAL_STATE = loadState();
const middleware = [promise(), thunk];

const store = createStore(
   reducer,
   INITIAL_STATE,
   compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
   )
);

store.subscribe(() => {
   console.log(store.getState())
});

store.dispatch({
   type: 'RESET'
})

export default store;
