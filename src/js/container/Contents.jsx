import React, { Component } from 'react';

import Advertise from './contents/Advertise.jsx';
import Article from './contents/Article.jsx';
import Sideber from './contents/Sideber.jsx';
// import About from './contents/About.jsx';

class Contents extends Component {

  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);
  }

  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){
    console.log("componentDidMount");
    setTimeout(() => this.props.onLoad() ,1000);
  }

  //==========================================================
  // RENDER
  //==========================================================

  renderContent() {
    switch(this.props.routeKay) {
      // case "about": return <About className="col-sm-9"/>;
      default: return <Article className="col-sm-9" routeKay={this.props.routeKay}/>;
    }
  }

  render() {
    console.log("Contents : " + this.props.routeKay);
    return (
      <div className="row App-contents">
          {this.renderContent()}
          <Sideber className="col-sm-3"/>
          <Advertise className="col-sm-12"/>
      </div>
    );
  }

}

export default Contents;