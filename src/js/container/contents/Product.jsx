import React, { Component } from 'react';
import {ParseDiv} from '../compornents/index.jsx';
import * as parser from '../../util/parser';

class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {sentence: []};
    this.loadArticleList = this.loadArticleList.bind(this);
  }

  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){}

  loadArticleList() {
    this.state.id = this.props.id || 0;
    parser.getNormarlXml("articles/product/" + this.state.id + ".xml").then((res) => this.setState({sentence: res}));
  }

  //==========================================================
  // RENDER
  //==========================================================
  renderAbout() {
    let key = 0, returnDom = [];
    returnDom.push(
      <div className="_article col-md-12" key={key}>
        <ParseDiv className="_sentence">{this.state.sentence}</ParseDiv>
      </div>
    );
    return returnDom;
  }

  render() {
    if(this.state.id !== this.props.id) this.loadArticleList();
    const className = this.props.className
      + " z-depth-1 App-article"
      + " App-about";

    return (
      <div className={className}>{this.renderAbout()}</div>
    );

  }

}

export default Product;