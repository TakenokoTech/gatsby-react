import React, { Component } from 'react';

import Advertise from './contents/Advertise.jsx';
import Article from './contents/Article.jsx';
import Sideber from './contents/Sideber.jsx';

class Contents extends Component {

  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){
    console.log("componentDidMount");
    setTimeout(() => this.props.onLoad() ,1000)
  }

  //==========================================================
  // RENDER
  //==========================================================
  render() {
    return (
      <div className="row App-contents">
          <Advertise className="col-sm-12"/>
          <Article className="col-sm-9"/>
          <Sideber className="col-sm-3"/>
      </div>
    );
  }

}

export default Contents;