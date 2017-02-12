import React, { Component } from 'react';
import logo from '../../images/LOGO.svg';

// import Component
import {Button} from "./compornents/index.jsx"
import { Link } from 'react-router';

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
          <Link className={btnClass} to={"/"}>Home</Link>
          <Link className="btn disabled" to={"/about"}>About</Link>
        </div>
      </div>
    );
  }

}

export default Header;
