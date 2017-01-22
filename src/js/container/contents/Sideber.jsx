import React, { Component } from 'react';
import {GaAds} from '../compornents/index.jsx';

class Sideber extends Component {

  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){

  }

  //==========================================================
  // RENDER
  //==========================================================

  renderProfile() {
    return (
      <div className="_profile">
        <div>プロフィール</div>
        <img alt="" src=""/><div>たけのこ</div>
      </div>
    );
  }

  render() {
    const className = this.props.className + " App-sideber";

    return (
      <div className={className}>
        <div className=""><GaAds/></div>
        <div className="">{this.renderProfile()}</div>
      </div>
    );
  }

}

export default Sideber;