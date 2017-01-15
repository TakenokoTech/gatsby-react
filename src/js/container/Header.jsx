import React, { Component } from 'react';
import logo from '../../images/LOGO.svg';

// import Component
import {Button} from "./compornents/index.jsx"

class Header extends Component {

  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){
    console.log("componentDidMount");
  }

  //==========================================================
  // ACTION
  //==========================================================
  onToggleOverlayClass(){
    console.log("onToggleOverlayClass");
  }

  //==========================================================
  // RENDER
  //==========================================================
  render() {

    const btnClass = "btn waves-effect waves-light";

    return (
      <div className="z-depth-4 App-header">
        <div className="header btn-group-justified">
          <Button className="brand"><img src={logo} className="App-logo" alt="logo"/></Button>
        </div>
        <div className="navigation btn-group-justified">
          <Button className={btnClass}>Home</Button>
          <Button className={btnClass}>Products</Button>
          <Button className={btnClass}>About</Button>
          <Button className={btnClass} onClick={this.onToggleOverlayClass} >Support</Button>
        </div>
      </div>
    );
  }

}

export default Header;
