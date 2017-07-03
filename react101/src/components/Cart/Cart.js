import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ProductRow from '../ProductRow/ProductRow';
import Create from '../Create/Create';
import GrandTotal from '../GrandTotal/GrandTotal';

import './Cart.css';

/**
 * Cart
 */

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grandTotal: 0,
      products: [],
      subtotals: []
    }
  }

  changeGrandTotal = (id, newSubTotal) => {
    let subTotals = this.state.subtotals;
    subTotals[id] = newSubTotal;

    let grandTotal = 0;
    for(var prop in subTotals) {
      grandTotal += subTotals[prop];
    }

// Update state of grandtotal integer and subtotals array
    this.setState({
      grandTotal: grandTotal,
      subtotals: subTotals
    })
  }

  createProduct = (product) => {
    var newProduct = {};
    newProduct.name = product.name;
    newProduct.price = product.price;
    newProduct.id = product.id;
    let products = this.state.products;
    products.push(newProduct);
    this.setState({
      products: products
    })
  }

  createProductRows = () => {
    var productRows = [];

    this.state.products.forEach((product, index) => {
      productRows.push(<ProductRow key={product.id}
                                   name={product.name}
                                   price={product.price}
                                   grandTotal={this.changeGrandTotal}
                                   delete={this.deleteProductRow}
                                   id={product.id}/>)
    });
  return productRows
  }

  deleteProductRow = (id) => {
    var filteredProducts;
    filteredProducts = this.state.products.filter((x) => {
      return x.id !== id
    })

    let subTotals = this.state.subtotals;
    delete subTotals[id];

    let grandTotal = 0;
    for (var prop in subTotals) {
      grandTotal += subTotals[prop];
    }

    console.log(filteredProducts);
    this.setState({
      products: filteredProducts,
      subtotals: subTotals,
      grandTotal: grandTotal
    })
  }

  render() {
    const rows = this.createProductRows();
    return (
        <section className="row" id="cart">
          <div className="col-md-12 productRows">
            {rows}
          </div>
          <div className="col-md-12 createRow">
            <Create createProduct={this.createProduct}/>
          </div>
          <div className="col-md-12 grantTotalRow">
            <GrandTotal value={this.state.grandTotal}/>
          </div>
        </section>
    );
  }
}

Cart.propTypes = {
  title: PropTypes.string
};

export default Cart;
