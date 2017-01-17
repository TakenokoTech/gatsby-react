import React, { Component } from 'react';
import * as api from '../../util/api.jsx';
import {ParseDiv} from '../compornents/index.jsx';

class Article extends Component {

  //==========================================================
  // CONSTRACTOR
  //==========================================================
  constructor(props){
    super(props);

    //-- article data --//
    this.state = {
      title:  "タイトル"
    };
  }

  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){
    console.log("componentDidMount");
    api.callApi("article.html").then((res) => {
      console.log(res.text);
      this.setState({title: res.text});
      var parser = new DOMParser();
      var dom = parser.parseFromString(res, "text/html");
      var title = dom.getElementById('doc');
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

  renderChips() {
    return (
      <div className="_chips">
        <div className="chip _t">Twitter</div>
        <div className="chip _f">FaceBook</div>
      </div>
    );
  }

  renderSentece() {
    return [
      <h2 key={1}>ヘッダー2</h2>,
      <p key={2}>ぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょう</p>,
      <p key={3}>ぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょう</p>,
      <h3 key={4}>ヘッダー3</h3>,
      <p key={5}>ぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょう</p>,
      <h4 key={6}>HEADER4</h4>,
      <p key={7}>ぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょう</p>,
      <p key={8}>ぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょう</p>,
      <p key={9}>ぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょう</p>
    ];
  }

  renderArticle() {
    let key = 0, returnDom = [];
    const Contents = [
      {date: "20XX/01/12 08:00", title: this.state.title, sentence: this.renderSentece()}
    ];
    for(let content of Contents) {
      returnDom.push(
        <div className="_article col-md-12 z-depth-2" key={key}>
            <div className="_date">{content.date}</div>
            <ParseDiv className="_title">{content.title}</ParseDiv>
            <div className="_sentence">{content.sentence}</div>
            <hr/>
            {this.renderChips()}
        </div>
      );
    }
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