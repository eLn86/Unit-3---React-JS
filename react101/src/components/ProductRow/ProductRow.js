import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './ProductRow.css';
/**
 * Product Row
 */

export class ProductRow extends Component {

    constructor(props) {
      super(props);
      this.state = {
        subtotal: 0
      }
    }

    onChange = (e) => {
      const qty = e.target.value;
      const subtotal = qty * this.props.price;
      this.props.grandTotal(this.props.id, subtotal);
      this.setState({
        subtotal: subtotal
      })
    }

    onDelete = (e) => {
      this.props.delete(this.props.id);
    }

  render() {
    return (
      <div className="row product">
        <div className="col-md-3 name">
        {this.props.name}
        </div>
        <div className="col-md-3 price">
        ${this.props.price}
        </div>
        <div className="col-md-3 qtr">
          <input
          type="number"
          min = {0}
          max = {50}
          defaultValue = {0}
          onChange = {this.onChange}/>
        </div>
        <div className="col-md-1 subtotal">
        ${this.state.subtotal}
        </div>
        <div className="col-md-1 deleteRow">
        <button className="btn btn-danger"
                onClick={this.onDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

// Product Row props
ProductRow.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  subtotal: PropTypes.string
};

export default ProductRow;
