import React, { Component } from 'react';

// Import Header css
import "./Header.css"


class Header extends Component {
  render() {
    return (
      <div className="row headerRow">
        <div className="col-md-12">
        <h2 className="header"> To-do List with EL and Han </h2>
        </div>
      </div>
    );
  }
}

export default Header;
