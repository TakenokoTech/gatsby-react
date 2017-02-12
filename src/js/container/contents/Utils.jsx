import React from 'react';
import {Button, ParseDiv, Link} from '../compornents/index.jsx';
import {PrismCode} from "react-prism";
import _ from 'lodash';

export const renderDom = (dom) => {
  let returnRender = [];
  const sentence = dom;
  for(let i in sentence) {
    if(!sentence.hasOwnProperty(i)) break;
    switch (sentence[i].nodeName) {
      case "code": returnRender.push(<pre key={i} className="line-numbers"><PrismCode className="language-javascript">{sentence[i].innerHTML}</PrismCode></pre>); break;
      case "button": returnRender.push(<Button key={i}>{sentence[i].innerHTML}</Button>); break;
      case "link": returnRender.push(<Link key={i} attr={sentence[i].attributes}>{this.renderSentence(sentence[i].childNodes)}</Link>); break;
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