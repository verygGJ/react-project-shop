import React from 'react';

export class ProductQuantity extends React.Component {
  render() {
    return (
      <div className="product-quantity">
        <div className="product-quantity__minus" onClick={this.props.decreaseQuantity.bind(this)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="1" viewBox="0 0 7 1">
            <rect width="7" height="1"></rect>
          </svg>
        </div>
        <div className="product-quantity__value">
          {this.props.value}
        </div>
        <div className="product-quantity__plus" onClick={this.props.increaseQuantity.bind(this)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7">
            <path d="M1308,350h7v1h-7v-1Zm3-3h1v7h-1v-7Z" transform="translate(-1308 -347)"></path>
          </svg>
        </div>
      </div>
    )
  }
}
