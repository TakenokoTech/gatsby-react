import React, { Component } from 'react';
import {GaAds, Button} from '../compornents/index.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import panda from '../../../images/panda.png';
import github from '../../../images/GitHub_Light.png';

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
        <div className="_title">Profile</div>
        <img alt="" src={panda}/><div className="_name">たけのこ</div>
        <div className="_clear" />
        <div className="_link">
          <Button className="_social _g"><img alt="" src={github} /></Button>
          <Button className="_social _g"><img alt="" src={github} /></Button>
          <Button className="_social _g"><img alt="" src={github} /></Button>
          <Button className="_social _g"><img alt="" src={github} /></Button>
          <div className="_clear" />
        </div>
      </div>
    );
  }

  renderCategory() {
    const renderChildren = (i) => {
      return (
        <ReactCSSTransitionGroup transitionName="categoryAnime" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          <ul key={i} className="slidein">
            <li><Button className="_child">カテゴリ</Button></li>
            <li><Button className="_child">カテゴリ</Button></li>
            <li><Button className="_child">カテゴリ</Button></li>
          </ul>
        </ReactCSSTransitionGroup>
      );
    };
    return(
      <div>
        <div className="_title">Category</div>
        <ul className="dropmenu">
          <li><Button className="_parent" onClick={() => this.onClickParent(0)}>親カテゴリ</Button>
            {this.state.openParent === 0 ? renderChildren(0) : null}
          </li>
        </ul>
      </div>
    );
  }

  renderFavor() {
    return(
      <div>
        <div className="_title">人気</div>
      </div>
    );
  }

  renderRecent() {
    return(
      <div>
        <div className="_title">最近</div>
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