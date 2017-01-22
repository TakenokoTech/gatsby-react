import React, { Component } from 'react';
import {GaAds} from '../compornents/index.jsx';

class Advertise extends Component {

  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){

  }

  //==========================================================
  // RENDER
  //==========================================================
  render() {
    const className = this.props.className + " App-advertise";

    return (
      <div className={className}>
        <div className="col-md-12"><GaAds/></div>
      </div>
    );
  }

}

export default Advertise;