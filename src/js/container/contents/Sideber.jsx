import React, { Component } from 'react';


class Sideber extends Component {

  componentDidMount(){
    console.log("componentDidMount");
  }

  render() {
    const className = this.props.className + " App-sideber";

    return (
      <div className={className}>
        <div>プロフィール</div>
      </div>
    );
  }

}

export default Sideber;