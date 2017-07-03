import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './GrandTotal.css';
/**
 * Grand Total
 */

export class GrandTotal extends Component {
  render() {
    return (
      <section className="row total">
        <h1>Total:
        <br/>
        <span id="grandtotal">{this.props.value}</span>
        </h1>
      </section>
    );
  }
}

export default GrandTotal;
