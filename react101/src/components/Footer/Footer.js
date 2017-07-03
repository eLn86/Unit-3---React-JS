import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Import CSS for header
import './Footer.css';
/**
 * Footer
 */

export class Footer extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-md-12">
            <footer>
            <h4>WDI Singapore 2017</h4>
            </footer>
          </div>
        </div>
    );
  }
}

Footer.propTypes = {
  title: PropTypes.string
};

export default Footer;
