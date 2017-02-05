import React, { Component } from 'react';
import {GaAds, Button} from '../compornents/index.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import panda from '../../../images/panda.png';
import { Link } from 'react-router';
import * as parser from '../../util/parser';

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
  componentDidMount(){
    parser.getCategory().then((res) => this.setState({category: res}));
  }

  //==========================================================
  // ACTION
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
        <div className="_profile_box"><img alt="" src={panda}/><div className="_name">たけのこ</div></div>
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
    // 子カテゴリ
    const renderChildren = (ParentsCategoryId) => {
      let childrenCategoryLi = [];
      const childrenCategory = parser.getChildrenCategory(this.state.category, ParentsCategoryId);
      for(let i in childrenCategory) {
        if(!childrenCategory.hasOwnProperty(i)) break;
        childrenCategoryLi.push(
          <li key={i}>
            <Button className="_child" notShadow={true} addRipple={true}>
              {childrenCategory[i].name}  ({childrenCategory[i].count})
            </Button>
          </li>
        );
      }
      return (
        <ReactCSSTransitionGroup transitionName="categoryAnime" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          <ul className="slidein">{childrenCategoryLi}</ul>
        </ReactCSSTransitionGroup>
      );
    };
    // 親カテゴリ
    const renderParents = () => {
      let parentsCategoryLi = [];
      const parentsCategory = parser.getParentsCategory(this.state.category);
      for(let i in parentsCategory) {
        if(!parentsCategory.hasOwnProperty(i)) break;
        parentsCategoryLi.push(
          <li key={i}>
            <Button className="_parent" addRipple={true} notShadow={true} onClick={() => this.onClickParent(i)}>
              {parentsCategory[i].name} ({parentsCategory[i].count})
            </Button>
            {this.state.openParent === i ? renderChildren(parentsCategory[i].id) : null}
          </li>
        );
      }
      return parentsCategoryLi;
    }
    return(
      <div>
        <div className="_title"><span>Category</span></div>
        <div className="dropmenu-group">
          <ul className="dropmenu">{renderParents()}</ul>
        </div>
      </div>
    );
  }

  renderFavor() {
    const renderArticle = () => {
      let arr = [];
      for(let i of [1,2,3,4,5])
      arr.push(
        <Link to={"/" + i} key={i*2}>
        <Button Tag="div" className="_article" key={i} addRipple={true} notShadow={true}>
          <div className="_article_state">【カテゴリ】2017/02/01</div>
          <div className="_article_title">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</div>
        </Button>
        </Link>, <hr key={i*2+1}/>
      );
      arr.pop();
      return arr;
    };
    return(
      <div className="_favor">
        <div className="_title"><span>人気</span></div>
        {renderArticle()}
      </div>
    );
    // <div className="favor_button"><Button className="_">prev</Button><Button className="_">next</Button></div>
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
        <div className="_content">{/*this.renderRecent()*/}</div>
      </div>
    );
  }

}

export default Sideber;