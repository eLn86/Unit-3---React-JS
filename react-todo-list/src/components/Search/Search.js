import React, { Component } from 'react';


import './Search.css';

/**
 * Header
 */
export class Search extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <input className="searchBar input-lg"
                 type="text"
                 placeholder="Search"/>
        </div>
      </div>
    );
  }
}

// Search.propTypes = {
//
// }

export default Search;
