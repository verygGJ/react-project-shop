import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { addToCart } from './../../../reducers/actions';
import { connect } from "react-redux";

class Product extends React.Component {

  addedInCart = () => {
    this.props.openClosePopup();
    this.props.productAdd(this.props.product);
    this.props.addToCart(1, this.props.product.id);
  }

  render() {
    const {product} = this.props
    return (
      <div className="product__item">
        <div className="product__inner">
          <div className="product__image">
            <Link to={{pathname: `catalog/${product.page_url}`, state: this.props.product}}>
              <img src={`${product.image}`} width="111" height="115" alt="" />
            </Link>
            <div className="product__label-wrap">
              <div className="product__label">{product.label}</div>
            </div>
          </div>
          <div className="product__title">
            <Link to={{pathname: `catalog/${product.page_url}`, state: this.props.product}}>
              {product.title}
            </Link>
          </div>
          <div className="product__price-box">
            <div className="product__old-price"><span>{product.old_price}</span><small>{product.currency}</small></div>
            <div className="product__new-price"><span>{product.new_price}</span><small>{product.currency}</small></div>
          </div>
          <div className="product__btn" onClick={this.addedInCart}>{product.status}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ProductsList: state.infoState.ProductsList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (quantity, id) => {
      dispatch(addToCart(quantity, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
