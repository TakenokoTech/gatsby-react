import React, { Component } from 'react';
import * as parser from '../../util/parser';
import {Breadcrumb, Button, Code, ParseDiv, Link, GaAds, Sns, Img} from '../compornents/index.jsx';

import _ from 'lodash';

class Article extends Component {

  //==========================================================
  // CONSTRACTOR
  //==========================================================
  constructor(props){
    super(props);

    this.loadArticleList = this.loadArticleList.bind(this);
    //-- article data --//
    this.state = {
      id: -1,
      date: "",
      title: "",
      sentence: "",
      links: []
    };
  }

  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){}

  componentWillUpdate(nextProps, nextState) {}

  loadArticleList() {
    // parser.getArticle("articles/16.01.15/article.2.xml").then((res) => this.setState(res));
    const getId = this.props.id || 0;
    console.log(getId)
    parser.getArticlList(getId)
    .then((res) => {
      this.setState({id: this.props.id, file_path: res[0].file_path});
      parser.getCategory().then((res) => {/* this.setState({links: res.links});*/});
      parser.getArticle(res[0].file_path).then((res) => {
        this.setState(res);
      });
    });
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
    returnRender.push(<Button key={key++} Tag="span" addRipple={true} className="_date">{"更新日:" + this.state.date}</Button>);
    returnRender.push(<Button key={key++} Tag="div" addRipple={true} className="_category">{this.state.category}</Button>);
    return returnRender;
  }

  renderSentence(dom) {
    let returnRender = [];
    const sentence = dom;
    for(let i in sentence) {
      if(!sentence.hasOwnProperty(i)) break;
      switch (sentence[i].nodeName) {
        case "code": returnRender.push(<Code key={i}>{sentence[i].innerHTML}</Code>); break;
        case "button": returnRender.push(<Button key={i}>{sentence[i].innerHTML}</Button>); break;
        case "link": returnRender.push(<Link key={i} attr={sentence[i].attributes}>{this.renderSentence(sentence[i].childNodes)}</Link>); break;
        case "img": returnRender.push(<Img key={i} attr={sentence[i].attributes} />); break;
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
      <div className="_article col-md-12" key={key}>
          {/*<Breadcrumb className="" links={[{name: "a", path: "a"},{name: "b", path:"b"}]} />*/}
          <ParseDiv className="_title">{this.state.title}</ParseDiv>
          <div className="_entry">{this.renderEntry()}</div>
          <div className="_sentence _description">{this.renderSentence(this.state.description)}</div>
          <GaAds/>
          <div className="_sentence">{this.renderSentence(this.state.sentence)}</div>
          <Sns title={this.state.title} category={this.state.category} />
      </div>
    );
    return returnDom;
  }

  render() {
    if(this.state.id !== this.props.id) this.loadArticleList();
    const className = this.props.className
      + (this.state.title !== "" ? " z-depth-1" : "")
      + " App-article";

    return (
      <div className={className}>{this.renderArticle()}</div>
    );
  }

}

export default Article;