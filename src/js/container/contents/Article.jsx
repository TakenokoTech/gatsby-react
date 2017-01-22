import React, { Component } from 'react';
import * as parser from '../../util/parser';
import {Button, ParseDiv, Chips, Link, GaAds} from '../compornents/index.jsx';
import {PrismCode} from "react-prism";
import _ from 'lodash';

class Article extends Component {

  //==========================================================
  // CONSTRACTOR
  //==========================================================
  constructor(props){
    super(props);

    //-- article data --//
    this.state = {
      date: "20XX/01/12 08:00",
      title: "タイトル",
      sentence: "文章"
    };
  }

  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){
    console.log("componentDidMount");
    parser.getArticle("articles/16.01.15/article.2.xml").then((res) => this.setState(res));
  }

  //==========================================================
  // RENDER
  //==========================================================
  renderCodePen() {
    return (
      <iFrame
        className="codepen"
        src='//codepen.io/TakenokoPro/embed/pRjExv/?height=273&theme-id=0&default-tab=css,result&embed-version=2'
        height='300' scrolling='no' title='pRjExv' frameborder='no' allowtransparency='true' allowfullscreen='true'
      >
        See the Pen <a href='http://codepen.io/TakenokoPro/pen/pRjExv/'>pRjExv</a> by Takenoko (<a href='http://codepen.io/TakenokoPro'>@TakenokoPro</a>) on <a href='http://codepen.io'>CodePen</a>.
      </iFrame>
    );
  }

  renderChips() {
    return (
      <div className="_chips">
        <div className="chip _t">Twitter</div>
        <div className="chip _f">FaceBook</div>
      </div>
    );
  }

  renderDescription() {
    let key = 1;
    let returnRender = [];
    returnRender.push(<h1 key={key++}/>);
    returnRender.push(<ParseDiv key={key++} Tag="div" className="_desc">{this.state.description}</ParseDiv>);
    return returnRender;
  }

  renderEntry(){
    let key = 1;
    let returnRender = [];
    returnRender.push(<ParseDiv key={key++} Tag="span" className="_date">{"更新日:" + this.state.date}</ParseDiv>);
    returnRender.push(<ParseDiv key={key++} Tag="a" className="_category">{this.state.category}</ParseDiv>);
    return returnRender;
  }

  renderSentence(dom) {
    let returnRender = [];
    const sentence = dom;
    for(let i in sentence) {
      if(!sentence.hasOwnProperty(i)) break;
      switch (sentence[i].nodeName) {
        case "code": returnRender.push(<pre key={i} className="line-numbers"><PrismCode className="language-javascript">{sentence[i].innerHTML}</PrismCode></pre>); break;
        case "button": returnRender.push(<Button key={i}>{sentence[i].innerHTML}</Button>); break;
        case "link": returnRender.push(<Link key={i} attr={sentence[i].attributes}>{this.renderSentence(sentence[i].childNodes)}</Link>); break;
        default:
          const tag = _.find([ "", "span", "a", "p", "h1", "h2", "h3", "h4"], t => t === sentence[i].nodeName);
          if(tag) {
            returnRender.push(<ParseDiv Tag={tag} key={i}>{this.renderSentence(sentence[i].childNodes)}</ParseDiv>);
          } else {
            if(typeof sentence[i] !== "object") break;
            sentence[i].childNodes.length > 1 ? returnRender.push(this.renderSentence(sentence[i].childNodes)) : returnRender.push(sentence[i].data);
          }
      }
    }
    return returnRender;
  }

  renderArticle() {
    let key = 0, returnDom = [];
    returnDom.push(
      <div className="_article col-md-12 z-depth-2" key={key}>
          <ParseDiv className="_title">{this.state.title}</ParseDiv>
          <div className="_entry">{this.renderEntry()}</div>
          <div className="_sentence _description">{this.renderSentence(this.state.description)}</div>
          <GaAds/>
          <div className="_sentence">{this.renderSentence(this.state.sentence)}</div>
          <Chips/>
      </div>
    );
    return returnDom;
  }

  render() {
    const className = this.props.className + " App-article";

    return (
      <div className={className}>{this.renderArticle()}</div>
    );
  }

}

export default Article;