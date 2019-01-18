import React, { Fragment } from 'react';
import Breadcrumbs from "./../../ui/Breadcrumbs";
import { PopupBuy } from "./../../ui/Popups";
import { ProductQuantity } from "./../../ui/productQuantity";

import { addToCart } from './../../../reducers/actions';
import { connect } from "react-redux";

class ProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      productQuantity: 1
    };
  }

  togglePopup()  {
    this.props.productAdd(this.props.location.state);

    this.setState({
      showPopup: !this.state.showPopup
    });
    if (this.state.showPopup === false) {
      console.log(this.state.productQuantity);
      this.props.addToCart(this.state.productQuantity, this.props.location.state.id);
    }
  }

  increaseQuantity = () => {
    this.props.incQuant();
    this.setState({
      productQuantity: this.state.productQuantity + 1
    });
  }

  decreaseQuantity = () => {
    this.props.decQuant();
    this.setState({
      productQuantity: this.state.productQuantity - 1
    });
  }

  render() {
    let props = this.props;
    let item = props.location.state;



    const ProductInfo = [
      { key: "Категория", value: `${item.parameters.categorey}` },
      { key: "Болезнь", value: `${item.parameters.sort}` },
      { key: "Производитель", value: `${item.parameters.manufacturer_name}` },
      { key: "Страна", value: `${item.parameters.manufacturer_country}` },
      { key: "Выпуска", value: `${item.parameters.manufacturer_form}` },
      { key: "Количество", value: `${item.parameters.quantity}` },
    ]

    let availability = (item.status === "Купить") ? <div className="product-page__status in-stock">Есть в наличии</div> :
                       <div className="product-page__status out-stock">Нет в наличии</div>;

    if (item.parameters === undefined || ProductInfo  === undefined ) return <div className="product-page-delete">Этот товар был удален</div>

    return (
      <div className="product-page">
        <Fragment>
          <Breadcrumbs />
        </Fragment>
        <div className="product-page__main">
          <div className="product-page__image">
            <img src={`${item.image}`} width="111" height="115" alt="" />
          </div>
          <div className="product-page__info">
            <h1 className="head-title">{item.title}</h1>
            {availability}
            <ul className="product-page__info-list">
              {ProductInfo.map((item, index) => (
                <li key={index} className="product-page__info-item">
                  <span className="name">{item.key}</span>
                  <span className="dots"></span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="product-page__price-box">
              <div className="product-page__old-price">
                <span>{item.old_price}</span>
                <small>{item.currency}</small>
              </div>
              <div className="product-page__new-price">
                <span>{item.new_price}</span>
                <small>{item.currency}</small>
              </div>
            </div>
            <div className="product-page__buttons">

              <div className="product-quantity">
                <div className="product-quantity__minus" onClick={this.decreaseQuantity}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="1" viewBox="0 0 7 1">
                    <rect width="7" height="1"></rect>
                  </svg>
                </div>
                <div className="product-quantity__value">
                  {this.state.productQuantity}
                </div>
                <div className="product-quantity__plus" onClick={this.increaseQuantity}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7">
                    <path d="M1308,350h7v1h-7v-1Zm3-3h1v7h-1v-7Z" transform="translate(-1308 -347)"></path>
                  </svg>
                </div>
              </div>


              <div className="buy-btn" onClick={this.togglePopup.bind(this)} >{item.status}</div>
            </div>
          </div>
        </div>
        {this.state.showPopup ? <PopupBuy value={this.state.productQuantity}
                                          closePopup={this.togglePopup.bind(this)}
                                />: null
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)
