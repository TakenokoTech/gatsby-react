import React, { Component } from 'react';
import * as parser from '../../util/parser';
import {Breadcrumb, ParseDiv, GaAds, Sns} from '../compornents/index.jsx';
import {renderDom} from "./Utils.jsx"
import { Link } from 'react-router';
import _ from 'lodash';

class List extends Component {

  //==========================================================
  // CONSTRACTOR
  //==========================================================
  constructor(props){
    super(props);
    this.loadArticleList = this.loadArticleList.bind(this);
    //-- article data --//
    this.state = {
      id: null,
      articles: []
    };
    this.id = null;
  }

  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){
    console.log("componentDidMount");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  loadArticleList() {
    parser.getArticlList(this.props.id).then((res) => this.setState({id: this.props.id, articles: res}));
  }

  //==========================================================
  // RENDER
  //==========================================================

  renderDescription() {
    let key = 1;
    const articles = this.state.articles;
    let returnRender = [];
    for(let i in articles) {
      if(!articles.hasOwnProperty(i)) break;
      console.log(articles[i]);
      returnRender.push(
        <div className="list-item" key={key++}>
          <div className="waves-effect waves-light list-item-left"><img className="_img" alt="" src="http://localhost:3000/articles/img/article.bmp" /></div>
          <div className="list-item-right">
            <Link className='_title' to={"" + articles[i].article_id}>{articles[i].title}</Link>
            <div className='list-item-right-bottom'>{articles[i].description}</div>
          </div>
          <div className="list-item-date">
            <span className='_date'>{articles[i].date}</span>
            <span className='_category'>{articles[i].category}</span>
          </div>
          <div style={{clear: "both"}} />
        </div>
      );
    }
    return returnRender;
  }

  renderArticle() {
    let key = 0, returnDom = [];
    returnDom.push(
      <div className="_article col-md-12" key={key}>
          <Breadcrumb className=""/>
          <ParseDiv className="_title">{this.state.title}</ParseDiv>
          <GaAds/>
          {this.renderDescription()}
          <div className="_sentence">{renderDom(this.state.sentence)}</div>
          <Sns/>
      </div>
    );
    return returnDom;
  }

  render() {
    if(this.state.id !== this.props.id) this.loadArticleList();
    const className = this.props.className
      + (this.state.articles.length > 0 ? " z-depth-1" : "")
      + " App-article"
      + " App-list";

    return (
      <div className={className}>{this.renderArticle()}</div>
    );
  }

}

export default List;