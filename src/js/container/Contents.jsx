import React, { Component } from 'react';

import Article from './contents/Article.jsx';
import Sideber from './contents/Sideber.jsx';

class Contents extends Component {

  componentDidMount(){
    console.log("componentDidMount");
  }

  render() {
    return (
      <div className="App-contents">
        <div className="row App-contents_main">
          <Article className="col-sm-9"/>
          <Sideber className="col-sm-3"/>
        </div>
      </div>
    );
  }

}

export default Contents;