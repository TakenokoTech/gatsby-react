import React, { Component } from 'react';
import { Router, Route, browserHistory} from 'react-router'

import App from './App';

class Root extends Component {

  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){
    console.log("componentDidMount");
  }

  //==========================================================
  // RENDER
  //==========================================================
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/:key" component={App} />
      </Router>
    );
  }

}

export default Root;