import React from 'react';
import { Link } from 'react-router-dom';

export default class AreaPage extends React.Component {
  render() {
    return  (
      <div className="area-page">
        HELLO BRAT
        <div className="area-registr-link">
          <Link to="/area/:register">Registration</Link>
        </div>
        <div className="area-login-link">
          <Link to="/area/:register/:login">Login</Link>
        </div>
      </div>
    );
  }
}
