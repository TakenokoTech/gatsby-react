import React, { Component } from 'react';
import * as parser from '../../util/parser';
import {Button, ParseDiv, Chips} from '../compornents/index.jsx';
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
    parser.getArticle("articles/16.01.15/article.1.xml").then((res) => this.setState(res));
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

  renderSentence(dom) {
    let returnRender = [];
    const sentence = dom;
    for(let i in sentence) {
      if(!sentence.hasOwnProperty(i)) break;
      // console.warn(sentence[i].childElementCount);
      switch (sentence[i].nodeName) {
        // case "text": returnRender.push(this.renderSentence(sentence[i].childNodes)); break;
        case "code": returnRender.push(<pre key={i} className="line-numbers"><PrismCode className="language-javascript">{sentence[i].innerHTML}</PrismCode></pre>); break;
        case "button": returnRender.push(<Button key={i}>{sentence[i].innerHTML}</Button>); break;
        // case "p": returnRender.push(<ParseDiv Tag="p" key={i}>{this.renderSentence(sentence[i].childNodes)}</ParseDiv>); break;
        // case "h1": returnRender.push(<ParseDiv Tag="h1" key={i}>{sentence[i].innerHTML}</ParseDiv>); break;
        // case "h2": returnRender.push(<ParseDiv Tag="h2" key={i}>{sentence[i].innerHTML}</ParseDiv>); break;
        // case "h3": returnRender.push(<ParseDiv Tag="h3" key={i}>{sentence[i].innerHTML}</ParseDiv>); break;
        // case "h4": returnRender.push(<ParseDiv Tag="h4" key={i}>{sentence[i].innerHTML}</ParseDiv>); break;
        default:
          const tag = _.find([ "", "span", "p", "h1", "h2", "h3", "h4"], t => t === sentence[i].nodeName);
          if(tag) {
            returnRender.push(<ParseDiv Tag={tag} key={i}>{this.renderSentence(sentence[i].childNodes)}</ParseDiv>);
          } else {
            if(typeof sentence[i] !== "object") break;
            if(sentence[i].childNodes.length > 1){
              returnRender.push(this.renderSentence(sentence[i].childNodes));
            } else {
              returnRender.push(sentence[i].data);
            }
          }
      }
    }
    console.warn(returnRender);
    return returnRender;
  }

  renderArticle() {
    let key = 0, returnDom = [];
    returnDom.push(
      <div className="_article col-md-12 z-depth-2" key={key}>
          <div className="_date">{this.state.date}</div>
          <ParseDiv className="_title">{this.state.title}</ParseDiv>
          <div className="_sentence">{this.renderSentence(this.state.sentence)}</div>
          <hr/>
          <Chips/>
          {/*this.renderChips()*/}
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