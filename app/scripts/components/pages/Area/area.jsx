import React from 'react';
import { Route, Switch } from 'react-router-dom';



import LoginFormComp from './Login/LoginContainer';
import RegistrationFormComp from './Registration/RegistrationContainer';
import { Connection } from './Login/Login';

export class Area extends React.Component {
  render() {
    return (
      <div className="area">
        <Switch>
          <Route exact path="/area" component={Connection} />
          <Route exact path="/area/:register" component={RegistrationFormComp} />
          <Route exact path="/area/:register/:login" component={LoginFormComp} />
        </Switch>
      </div>
    );
  }
}
