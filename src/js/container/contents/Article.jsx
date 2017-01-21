import React, { Component } from 'react';
import * as parser from '../../util/parser';
import {ParseDiv, Chips} from '../compornents/index.jsx';
import {PrismCode} from "react-prism";

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

  renderSentence() {
    let returnRender = [];
    const sentence = this.state.sentence;
    for(let i in sentence) {
      if(!sentence.hasOwnProperty(i)) break;
      switch (sentence[i].nodeName) {
        case "text": returnRender.push(<ParseDiv key={i} className="_text">{sentence[i].innerHTML}</ParseDiv>); break;
        case "code": returnRender.push(<pre key={i} className="line-numbers"><PrismCode className="language-javascript">{sentence[i].innerHTML}</PrismCode></pre>); break;
        default: break;
      }
    }
    return returnRender;
  }

  renderArticle() {
    let key = 0, returnDom = [];
    returnDom.push(
      <div className="_article col-md-12 z-depth-2" key={key}>
          <div className="_date">{this.state.date}</div>
          <ParseDiv className="_title">{this.state.title}</ParseDiv>
          <div className="_sentence">{this.renderSentence()}</div>
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