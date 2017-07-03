import React, { Component, PropTypes } from 'react';

/**
 * Search

 */
export class Search extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section className="row">
        <div className="col-xs-12">
          <input className="form-control input-lg" type="text" placeholder="Search" />
        </div>
      </section>
    );
  }
}


export default Search;
