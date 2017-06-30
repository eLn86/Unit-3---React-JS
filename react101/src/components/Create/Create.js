import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import './Create.css';
/**
 * Create Row
 */

export class Create extends Component {

constructor(props) {
  super(props);
  this.state = {
    name: "",
    price: "",
    id: uuid.v4()
  }
}

onChange = (e) => {
  if(e.target.name == "name") {
    this.state.name = e.target.value;
  }
  if(e.target.name == "price") {
    this.state.price = e.target.value;
  }
  this.setState(this.state);
}

onClick = (e) => {
  this.props.createProduct(this.state);
  this.setState({
    name: "",
    price: "",
    id: uuid.v4()
  })
}

  render() {

    return (
      <section className="row create">
        <div className="col-md-2 name">
         <input type="text"
                name="name"
                placeholder="Item Name"
                className="form-control"
                value={this.state.name}
                onChange={this.onChange}/>
        </div>
        <div className="col-md-2 price">
         <input type="number"
                name="price"
                min={0}
                placeholder="Price"
                className="form-control"
                value={this.state.price}
                onChange={this.onChange}/>
        </div>
        <div className="col-md-2 createProduct">
          <button type="button"
                  className="btn btn-success"
                  onClick={this.onClick}>Create</button>
        </div>
      </section>
    );
  }
}

export default Create;
