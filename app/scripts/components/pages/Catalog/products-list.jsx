import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Product from './product';

import { connect } from "react-redux";

Array.prototype.hasAll = function(a) {
  var hash = this.reduce(function(acc, i) { acc[i] = true; return acc; }, {});
  return a.every(function(i) { return i in hash; });
};

class ProductList extends React.Component {
  render() {
    const { ProductsList } = this.props;
    return (
      <Fragment>
        {ProductsList


          .filter(product => {
            let checked_filters = this.props.filter.display;
            let items_filters = Object.values(product.parameters);
            console.log(`${checked_filters} -- ${items_filters}`)
            // let filtrationChecked = () => {
            //   let checkedResults = false
            //   checked_filters.forEach((itm) => {
            //     items_filters.forEach((itm2) => {
            //       if (itm === itm2) {
            //         checkedResults = true
            //       }
            //     })
            //   })
            //   return checkedResults
            // }
            return items_filters.hasAll(checked_filters) || this.props.filter.display.length === 0
          })


          .map((product, id) => (
            <Product key={product.id}
                     product={product}
                     openClosePopup={this.props.togglePopup}
                     productAdd={this.props.productAdd} />
        ))}
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    ProductsList: state.infoState.ProductsList
  }
}

export default connect(mapStateToProps)(ProductList);
