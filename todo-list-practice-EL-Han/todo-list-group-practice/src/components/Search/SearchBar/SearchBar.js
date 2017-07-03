import React, {PropTypes} from 'react';

// Import static files
import './SearchBar.css';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
    }
  }

  /****/
  /*** Function: storeRequest(event) */
  /*** Description: Stores search request into searchInput state */
  /*** Passed into: nil */
  /****/

  storeRequest = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  /****/
  /*** Function: findResult(event) */
  /*** Description: Filters tasks array passed by Search.js for the task matching the search name */
  /***              and returns the searchInput state using return search result. */
  /*** Passed into: nil */
  /****/

  findResult = (event) => {
    var taskArray = this.props.tasks;

    var foundTask = taskArray.filter((task) => {
      return task.taskName === this.state.searchInput;
    });

    this.props.returnSearchResult(foundTask);

    // this.setState({
    //   searchInput: "",
    // })

  }

  render() {
    return (
      <div className= "row searchBarRow">
        <div className="col-md-12 searchBar">
          <input type='string'
                 className="searchInput input-lg" value={this.state.searchInput} onChange= {this.storeRequest}/>
          <button className= 'btn btn-lg btn-primary'type='submit' onClick= {this.findResult}>Search Tasks</button>
        </div>
      </div>
    );
  }
}
