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
      openParent: null,
      category: null,
      favor: null
    };
  }

  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){
    parser.getCategory().then((res) => {
      this.setState({category: res})
    });
    parser.getFavorArticl().then((res) => {
      this.setState({favor: res});
    });
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
            <Link className="_child" to={"list-" + childrenCategory[i].id}>
              {childrenCategory[i].name}  ({childrenCategory[i].count})
            </Link>
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
    const renderArticle = (t) => {
      let arr = [];
      const favor = t.state.favor || [];
      let key = 1;
      for(let f of favor)
      arr.push(
        <Link to={"/" + key} key={key}>
        <Button Tag="div" className="_article" key={key++} addRipple={true} notShadow={true}>
          <div className="_article_state">【{f.category}】{f.date}</div>
          <div className="_article_title">{f.title}</div>
        </Button>
        </Link>, <hr key={key++}/>
      );
      arr.pop();
      return arr;
    };
    return(
      <div className="_favor">
        <div className="_title"><span>人気</span></div>
        {renderArticle(this)}
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