import React from 'react';
import ReactDOM from 'react-dom';
import { Routing } from './components/routing';
import { HashRouter, BrowserRouter  } from "react-router-dom";

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

export class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Routing />
      </HashRouter>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);
