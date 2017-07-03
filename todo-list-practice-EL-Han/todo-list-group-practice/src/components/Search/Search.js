import React, {PropTypes} from 'react';

// Import components
import SearchBar from './SearchBar/SearchBar.js';
import SearchResults from './SearchResults/SearchResults.js';

// Import static files
import './Search.css';


export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  /****/
  /*** Function: returnSearchResult(result) */
  /*** Description: Concatenates result into results array */
  /*** Passed into: SearchBar.js */
  /****/

  returnSearchResult = (result) => {

    this.setState({
      results: this.state.results.concat([result])
    })
    console.log(this.state.results);
  }

  render() {
    return (
      <div className="row searchContainer">
        <div className="col-md-12 searchBox">

            <SearchBar returnSearchResult= {this.returnSearchResult} tasks={this.props.tasks}/>

            <SearchResults searchResults={this.state.results}/>


        </div>
      </div>
    );
  }
}
