import React, { Component } from 'react';
import {Button} from './compornents/index.jsx';

class Header extends Component {

  componentDidMount(){
    console.log("componentDidMount");
  }

  onToggleOverlayClass(){
    console.log("onToggleOverlayClass");
  }

  renderFooter() {
    const footerContents = [
      {category: "カテゴリ1", page: ["page1", "page2"]},
      {category: "カテゴリ2", page: ["page1", "page2"]},
      {category: "カテゴリ3", page: ["page1", "page2"]}
    ];
    let children = (contents) => {
      let key = 0, returnDom = [];
      for(let content of contents) {
        returnDom.push(<li key={key++}><Button className="_" notShadow={true}>{content}</Button></li>);
      }
      return returnDom;
    };
    let parents = () => {
      let key = 0, returnDom = [];
      for(let content of footerContents) {
        returnDom.push(<div key={key++} className="col-md-4 footer_item"><h5>{content.category}</h5><ul>{children(content.page)}</ul></div>);
      }
      return returnDom;
    };
    return (
      <div className="row footer">{parents()}</div>
    );
  }

  renderLegal() {
    return (
      <div className="legal">
        <div><a>プライバシーポリシー</a></div>
        <div><a>利用規約</a></div>
        <div><a>特定商取引法に基づく表示</a></div>
      </div>
    );
  }

  render() {
    return (
      <div className="z-depth-4 App-footer">
        {this.renderFooter()}
        {this.renderLegal()}
      </div>
    );
  }

}

export default Header;
