import React, { Component } from 'react';

class Overlay extends Component {

  componentDidMount(){
    console.log("componentDidMount");
  }

  render() {
    return (
      <div className="App-overlay"></div>
    );
  }

}

export default Overlay;
