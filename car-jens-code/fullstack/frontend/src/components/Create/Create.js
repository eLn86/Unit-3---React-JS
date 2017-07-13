import React, { Component, PropTypes } from 'react';
import axios from 'axios';


/**
 * Create
 */
export class Create extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);

    this.state = {
      car: null
    }
  }


  componentWillUpdate() {
    if(this.props.car !== "") {
      axios.get('/api/'+ this.props.car)
        .then( (response) => {
          console.log(response);
          this.setState({
            car: response.data
          });
        })
        .catch((error)=> {
          console.log(error);
        });
    }
  }



  render() {
    return (
      <div>
        <h1>{this.state.car ? this.state.car.manufacturer : "Select car"}</h1>
      </div>
    );
  }
}

export default Create;
