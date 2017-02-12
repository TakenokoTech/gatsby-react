import React, { Component } from 'react';
import {ParseDiv} from '../compornents/index.jsx';
import * as parser from '../../util/parser';

class Terms extends Component {

  constructor(props) {
    super(props);

    this.state = {sentence: []};
  }

  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){
    console.log("componentDidMount");
    parser.getNormarlXml("terms.xml").then((res) => this.setState({sentence: res}));
  }

  //==========================================================
  // RENDER
  //==========================================================
  renderTerms() {
    let key = 0, returnDom = [];
    console.log(this.state);
    returnDom.push(
      <div className="col-md-12" key={key}>
        <ParseDiv className="_sentence">{this.state.sentence}</ParseDiv>
      </div>
    );
    return returnDom;
  }

  render() {
    const className = this.props.className
      + " z-depth-1" 
      + " App-about";

    return (
      <div className={className}>{this.renderTerms()}</div>
    );

  }

}

export default Terms;