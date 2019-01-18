import React, { Fragment } from 'react';
import { ProductQuantity } from './productQuantity';

import { addToCart } from './../../reducers/actions';
import { connect } from "react-redux";

export class PopupBuy extends React.Component {
  render() {

    const {value} = this.props;

    let valueText = (value === undefined) ? null :
        <div className="popup__quantity"> Количсетво товаров {this.props.value}</div>;

    return (
      <div className="popup popup-buy">
        <div className="popup__overlay" onClick={this.props.closePopup}></div>
        <div className="popup__holder">
          <div className="popup__close" onClick={this.props.closePopup}>X</div>
          <div className="popup__content">
            { valueText }
            <div className="popup__title">Товар добавлен в корзину</div>
          </div>
        </div>
      </div>
    );
  }
}


export class BasketPopup extends React.Component {
  render() {
    const {cartItems} = this.props;

    let basketTop = (cartItems.length === 0) ?
        <div className="basket-popup__top">Ваша корзина пуста</div>
        :
        <div className="basket-popup__top">Корзина</div>;

    let basketBottomInfo = (cartItems.length === 0) ? null :
        <form action="#" className="basket-block__bottom">
          <div className="basket-block__total">
            <div className="basket-block__total-text">Итого:</div>
            <div className="basket-block__price">
              <span id="top_cart_total">4614.2</span>
              <small> грн.</small>
            </div>
          </div>
          <button className="submit-btn">Оформление заказа</button>
        </form>

   let some2;
   let qunnnn = this.props.ProductsListQuantity.map(item => (
     this.props.cartItems.map(item2 => {
       if (item.id === item2.id) {
         console.log(item.quantity);
         some2 = item.quantity
       }
     })
   ))

   let newArr = []
   newArr = cartItems.map(x => ({
     ...x,
     quantity: some2
   }))

    console.log(some2);

    return (
      <div className="popup popup-basket">
        <div className="popup__overlay" onClick={this.props.closePopup}></div>
        <div className="popup__holder">
          <div className="basket-popup">
            {basketTop}
            <div className="basket-block">
              <div className="basket-block__list">
                {newArr.map((item, id) => (
                  <div className="basket-block__item" key={id}>
                    <div className="basket-block__delete">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10.03" height="10.03" viewBox="0 0 10.03 10.03">
                        <path d="M1750.87,6621.99l3.94-3.95a0.622,0.622,0,0,0-.88-0.88l-3.94,3.94-3.94-3.94a0.626,0.626,0,0,0-.89.88l3.94,3.95-3.94,3.94a0.64,0.64,0,0,0,0,.89,0.661,0.661,0,0,0,.45.18,0.62,0.62,0,0,0,.44-0.18l3.94-3.95,3.94,3.95a0.626,0.626,0,0,0,.88-0.89Z" transform="translate(-1744.97 -6616.97)"></path>
                      </svg>
                    </div>
                    <div className="basket-block__image">
                      <img src={`${item.image}`} width="90" height="90" alt="" />
                    </div>
                    <div className="basket-block__info">
                      <div className="basket-block__title">
                        {item.title}
                      </div>
                      <div className="basket-block__options">
                        <div className="product-quantity__value">
                          {item.quantity}
                        </div>
                        <div className="basket-block__price">
                          <span className="cart_popup_product_price_553">{item.new_price}</span>
                          <small>{item.currency}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {basketBottomInfo}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ProductsListQuantity: state.infoState.ProductsListQuantity
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (quantity, id) => {
      dispatch(addToCart(quantity, id))
    }
  }
}

BasketPopup = connect(mapStateToProps, mapDispatchToProps)(BasketPopup)
