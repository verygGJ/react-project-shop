import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import { Header } from './header';
import { BasketPopup } from './ui/Popups'


import { Mainpage } from './pages/MainPage/main-page';
import Blog from './pages/Blog/blog';
import Contacts from './pages/Contacts/contacts';
import Catalog from './pages/Catalog/catalog-index';


export class Routing extends React.Component {
  state = {
    productQuantity: 1,
    productInCart: [],
    showCart: false,

  };

  togglePopupCart = () => {
    this.setState({
      showCart: !this.state.showCart
    });
  }

  poluchitQ = (q) =>{
    console.log(q)
    this.setState({
      productQuantity: q
    });
  }

  addProductToCart = (product) => {
    this.setState(({productInCart}) => {
      let products = [...productInCart]
      products.push(product)
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
      products = products.filter(onlyUnique);
      return {
        productInCart: products
      }
    })
  }

  increaseQuantity = () => {
    this.setState({
      productQuantity: this.state.productQuantity + 1
    });
  }

  decreaseQuantity = () => {
    this.setState({
      productQuantity: this.state.productQuantity - 1
    });
  }

  render() {
    return (
        <div className="wrapper">
          <header className="header">
            <Header cartQuant={this.state.productInCart}
                    togglePopupCart={this.togglePopupCart}
            />
            <Fragment>
              {this.state.showCart ? <BasketPopup closePopup={this.togglePopupCart.bind(this)}
                                                  cartItems={this.state.productInCart}
                                                  productQuantity={this.state.productQuantity}
                                     />: null }
            </Fragment>
          </header>
          <main className="main">
            <Switch>
              <Route exact path='/' component={Mainpage}/>
              <Route path='/blog' component={Blog} />
              <Route path='/contacts'component={Contacts}/>
              <Route path='/catalog' render={routeProps => <Catalog {...routeProps}
                                     incQuant={this.increaseQuantity}
                                     decQuant={this.decreaseQuantity}
                                     productAdd={this.addProductToCart}
                                     poluchitQ={this.poluchitQ} />}
              />
            </Switch>
          </main>
        </div>
    );
  }
}
