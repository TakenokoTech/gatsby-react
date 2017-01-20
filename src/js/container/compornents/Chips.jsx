import React, { Component } from 'react';

class Chips extends Component {

  componentDidMount(){
    console.log("componentDidMount");
  }

  onClick() {}

  render() {
    // const className = this.props.className || "";

    return (
      <div className="_chips">
        <div className="waves-effect waves-light chip _t " onClick={this.onClick()}>Twitter</div>
        <div className="waves-effect waves-light chip _f " onClick={this.onClick()}>FaceBook</div>
      </div>
    );
  }
}

export default Chips;
