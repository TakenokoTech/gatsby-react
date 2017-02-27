import React, {Component, PropTypes} from "react";
import { Link } from 'react-router';

class Breadcrumb extends Component {

  constructor(props){
    super(props);
  }

  renderChild(){
    let key = 0;
    let links = [];
    for(let l of this.props.links) {
      links.push(<Link to={l.path} key={key++} >{l.name}</Link>);
      links.push(<span key={key++}>{" > "}</span>);
    }
    links.pop();
    return (<div>{links}</div>);
  }

  render() {
    const className = this.props.className + " App-breadcrumb";
    return (<div className={className}>{this.renderChild()}</div>);
  }
}

Breadcrumb.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Breadcrumb;
