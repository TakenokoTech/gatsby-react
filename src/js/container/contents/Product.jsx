import React, { Component } from 'react';

class Product extends Component {

  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){}

  //==========================================================
  // RENDER
  //==========================================================
  renderAbout() {
    let key = 0, returnDom = [];
    returnDom.push(
      <div className="col-md-12" key={key}>

      </div>
    );
    return returnDom;
  }

  render() {
    const className = this.props.className
      + " z-depth-1" 
      + " App-product";

    return (
      <div className={className}>{this.renderAbout()}</div>
    );

  }

}

export default Product;