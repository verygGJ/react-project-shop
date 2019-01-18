import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import menu from '../../API/main-menu.json';

export class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      logosrc: 'data/logo.png',
      logoalt: 'logo'
    };
  }
  render() {
    return (
      <Link to="/">
        <img src={this.state.logosrc} alt={this.state.logoalt} />
      </Link>
    );
  }
}

export class Menu extends React.Component {
  render() {
    return (
      <ul className="main-menu__list">

        {menu.map((item, index) => (
          <li className="main-menu__item" key={index}>
            <Link to={`${item.link}`}>{item.name}</Link>
          </li>
        ))}


        <div className="header-basket" onClick={this.props.togglePopupCart.bind(this)} >
          <div className="header-basket__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 20" id="basket" width="15" height="20">
              <path d="M15 19.288l-.92-15.126a.611.611 0 0 0-.59-.591h-2.56v-.407A3.055 3.055 0 0 0 8 0H7a3.055 3.055 0 0 0-2.93 3.165v.407H1.51a.611.611 0 0 0-.59.591L0 19.325a.672.672 0 0 0 .16.474.557.557 0 0 0 .43.2h13.82a.61.61 0 0 0 .59-.633v-.078zM5.24 3.164A1.836 1.836 0 0 1 7 1.264h1a1.836 1.836 0 0 1 1.76 1.9v.407H5.24v-.407zM1.21 18.733l.84-13.9h2.02V5.4a1.4 1.4 0 0 0-.7 1.24 1.289 1.289 0 1 0 2.57 0 1.4 1.4 0 0 0-.7-1.24v-.563h4.52V5.4a1.4 1.4 0 0 0-.7 1.24 1.289 1.289 0 1 0 2.57 0 1.4 1.4 0 0 0-.7-1.24v-.563h2.01l.85 13.9H1.21z">
              </path>
            </svg>
          </div>
          <div className="header-basket__qunt">
            {this.props.cartQuant.length}
          </div>
        </div>

      </ul>
    );
  }
}

export class Header extends React.Component {
  render() {
    return (
      <div className="header__inner">
        <div className="logo">
          <Logo />
        </div>
        <nav className="main-menu">
          <Menu cartQuant={this.props.cartQuant}
                togglePopupCart={this.props.togglePopupCart}
          />
        </nav>
      </div>
    );
  }
}
