import React, {PropTypes} from 'react';

// Import static files

import './SearchResults.css';
/*
<input type="checkbox" className="taskCheckBox"/>
*/
export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className= "row searchResultsRow">
        <div className="col-md-12 searchResults">

          {this.props.results}

        </div>
      </div>
    );
  }
}
