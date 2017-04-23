import React, { Component } from 'react';

import Advertise from './contents/Advertise.jsx';
import Article from './contents/Article.jsx';
import Sideber from './contents/Sideber.jsx';
import Terms from './contents/Terms.jsx';
import List from './contents/List.jsx';
// import About from './contents/About.jsx';

class Contents extends Component {

  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);
    this.query = {};
    this.getQuery();
  }

  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){
    setTimeout(() => this.props.onLoad() ,1000);
  }

  getQuery() {
    const pair = location.search.substring(1).split('&');
    for(let p of pair) {
        const kv = p.split('=');
        this.query[kv[0]]=kv[1];
    }
  }

  //==========================================================
  // RENDER
  //==========================================================

  renderContent() {
    const key = this.props.routeKay ? this.props.routeKay.split("-") : [];
    switch(key[0]) {
      // case "about": return <About className="col-sm-9"/>;
      case "list": return <List className="col-sm-9" id={key[1]} />;
      case "terms": return <Terms className="col-sm-9"/>;
      default: return <Article className="col-sm-9"  id={key[0]} routeKay={this.props.routeKay}/>;
    }
  }

  render() {
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