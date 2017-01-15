import React, { Component } from 'react';

class Article extends Component {

  componentDidMount(){
    console.log("componentDidMount");
  }
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

  render() {
    const className = this.props.className + " App-article";

    return (
      <div className={className}>
        <div className="_date">20XX/01/12 08:00</div>
        <div className="_title">タイトル</div>
        <div className="_sentence">
          <h2>ヘッダー2</h2>
          <p>ぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょう</p>
          <p>ぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょう</p>
          <h3>ヘッダー3</h3>
          <p>ぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょう</p>
          <h4>HEADER4</h4>
          <p>ぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょう</p>
          <p>ぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょう</p>
          <p>ぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょうぶんしょう</p>
        </div>
        <hr/><div className="_chips"><div className="chip _t">Twitter</div><div className="chip _f">FaceBook</div></div>
      </div>
    );
  }

}

export default Article;