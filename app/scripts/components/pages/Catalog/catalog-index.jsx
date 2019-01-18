import React, { Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import PropTypes from "prop-types";

import ProductList from "./products-list";
import ProductPage from './../Product/product-index';
import Breadcrumbs from "./../../ui/Breadcrumbs";
import { PopupBuy, BasketPopup } from "./../../ui/Popups";


const filters = [
  {
    title: "Производитель",
    name: "manufacturers",
    value: ["Фармацевтическая компания «Здоровье»", "CEFAK"]
  },
  {
    title: "Страна производитель",
    name: "country",
    value: ["Украина", "Израиль"]
  }
]

class Checkbox extends React.Component {

  handleChange = (option) => (event) => {
    const {checked} = event.target
    if (checked) {
      this.props.handleChecked(option);
    } else {
      this.props.handleUnChecked(option);
    }
  }

  render() {
    const {
      checkbox = null,
      name = null,
      index = null,
    } = this.props || {};

    return (
      <div key={index} className="checkbox-block">
        <label>
          <input  type="checkbox" onChange={this.handleChange(checkbox)}/>
          {checkbox}
        </label>
      </div>
    )
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checkbox: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

class FilterItem extends React.Component {
  state = {
    isOpen: true
  }

  toggleFilters() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    const { item } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="catalog__categories-item">
        <div className="catalog__categories-title" onClick={this.toggleFilters.bind(this)} >
          {item.title}
        </div>
        <div className="catalog__categories-inner">
          <div className="catalog__categories-content">
            <div className="checkbox-block__list">
              {isOpen && item.value.map((checkbox, index) => (
                <Checkbox key={index}
                          checkbox={checkbox}
                          name={name}
                          index={index}
                          handleChecked={this.props.onHandleCheked}
                          handleUnChecked={this.props.onHandleUnCheked}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Filters extends React.Component {
  render() {
    return (
      <div className="catalog__sidebar">
        <div className="catalog__filters">
          {filters.map((item, index) => (
            <FilterItem item={item}
                        key={index}
                        onHandleCheked={this.props.onHandleCheked}
                        onHandleUnCheked={this.props.onHandleUnCheked}
            />
          ))}
        </div>
      </div>
    )
  }
}

class CatalogPage extends React.Component {
  state = {
    display: [],
    checkedOption: [],
    showPopup: false,
  }

  handleCheked = (option) => {
    this.setState(({checkedOption}) => {
      let options = [...checkedOption];
      options.push(option);
      return {
        checkedOption: options ,
        display: options
      }
    })
  }

  handleUnCheked = (option) => {
    this.setState(({checkedOption}) => {
      let options = [...checkedOption];
      options = options.filter(item => item !== option)
      return {
        checkedOption: options,
        display: options
      }
    })
  }

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }



  render() {
    return (
      <Fragment>
        <Fragment>
          <Breadcrumbs />
        </Fragment>
        <div className="catalog">
          <Fragment>
            <Filters onHandleCheked={this.handleCheked} onHandleUnCheked={this.handleUnCheked}/>
          </Fragment>
          <div className="catalog__main">
            <div className="product__list">
              <ProductList filter={this.state}
                           togglePopup={this.togglePopup}
                           productAdd={this.props.productAdd}
              />
            </div>
          </div>
        </div>
        {this.state.showPopup ? <PopupBuy closePopup={this.togglePopup.bind(this)} />: null }
      </Fragment>
    )
  }
}

class Catalog extends React.Component {

  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/catalog" exact
                 render={routeProps => <CatalogPage {...routeProps} productAdd={this.props.productAdd} />}
          />
          <Route path="/catalog/:page_url" render={routeProps => <ProductPage {...routeProps} poluchitQ={this.props.poluchitQ} incQuant={this.props.incQuant} decQuant={this.props.decQuant} productAdd={this.props.productAdd} />}/>
        </Switch>
      </Fragment>
    )
  }
}

export default Catalog;
