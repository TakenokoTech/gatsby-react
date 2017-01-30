import React, { Component } from 'react';
import {GaAds, Button} from '../compornents/index.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import panda from '../../../images/panda.png';

class Sideber extends Component {

  constructor(props){
    super(props);
    this.onClickParent = this.onClickParent.bind(this);
    this.state = {
      openParent: null
    };
  }


  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){}

  //==========================================================
  // RENDER
  //==========================================================

  onClickParent(i) {
    this.setState(
      this.state.openParent !== i ? {openParent: i} : {openParent: null}
    );
  }

  //==========================================================
  // RENDER
  //==========================================================

  renderProfile() {
    return (
      <div className="_profile">
        <div className="_title"><span>Profile</span></div>
        <img alt="" src={panda}/><div className="_name">たけのこ</div>
        <div className="_clear" />
        <div className="_link">
          <Button className="_social _g" addRipple={true} onClick={null}><i className="fi-social-github" /></Button>
          <Button className="_social _f" addRipple={true} onClick={null}><i className="fi-social-facebook" /></Button>
          <Button className="_social _t" addRipple={true} onClick={null}><i className="fi-social-twitter" /></Button>
          <div className="_clear" />
        </div>
      </div>
    );
  }

  renderCategory() {
    const renderChildren = (i) => {
      const cat = ["カテゴリ1", "カテゴリ2", "カテゴリ3"]
      let children = [];
      for(let c of cat) children.push(<li><Button className="_child" notShadow={true} addRipple={true}>{c}</Button></li>);
      return (
        <ReactCSSTransitionGroup transitionName="categoryAnime" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          <ul key={i} className="slidein">{children}</ul>
        </ReactCSSTransitionGroup>
      );
    };
    return(
      <div>
        <div className="_title"><span>Category</span></div>
        <div className="dropmenu-group">
          <ul className="dropmenu">
            <li><Button className="_parent" addRipple={true} notShadow={true} onClick={() => this.onClickParent(0)}>親カテゴリ</Button>{this.state.openParent === 0 ? renderChildren(0) : null}</li>
            <li><Button className="_parent" addRipple={true} notShadow={true} onClick={() => this.onClickParent(1)}>親カテゴリ</Button>{this.state.openParent === 1 ? renderChildren(1) : null}</li>
          </ul>
        </div>
      </div>
    );
  }

  renderFavor() {
    return(
      <div className="_favor">
        <div className="_title"><span>人気</span></div>
        <div className="_article">
          <img alt="" src="http://localhost:3000/articles/img/article.bmp" />
          <a className="_article_title">タイトルタイトルタイトル</a>
          <div className="_state">日付</div>
        </div>
      </div>
    );
  }

  renderRecent() {
    return(
      <div>
        <div className="_title"><span>最近</span></div>
      </div>
    );
  }

  render() {
    const className = this.props.className + " App-sideber";

    return (
      <div className={className}>
        <div className=""><GaAds/></div>
        <div className="_content">{this.renderProfile()}</div>
        <div className="_content">{this.renderCategory()}</div>
        <div className="_content">{this.renderFavor()}</div>
        <div className="_content">{this.renderRecent()}</div>
      </div>
    );
  }

}

export default Sideber;