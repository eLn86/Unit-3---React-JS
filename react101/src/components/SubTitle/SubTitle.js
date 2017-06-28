// Import modules
import React, {Component} from 'react';

/**
 * SubTitle
 */
 export class SubTitle extends Component {
   render() {
     return (
       <h2 className="heading">{this.props.title}</h2>
     );
   }
 }

export default SubTitle;
