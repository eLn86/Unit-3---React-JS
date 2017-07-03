import React, { Component, PropTypes } from 'react';

import './NotFound.css';
/**
 * Not Found
 */
export class Create extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="row notFound">
        <div className="col-md-12">
          <h1 className="error">Error 404: Page not found</h1>
        </div>
      </div>
    );
  }
}

export default Create;
