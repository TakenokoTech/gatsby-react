import React, {Component, PropTypes} from "react";

class Breadcrumb extends Component {

  constructor(props){
    super(props);
    this.state = {
      link: ["親カテゴリ", "カテゴリ", "子カテゴリ"]
    };
  }

  componentDidMount(){

  }

  renderChild(){
    let key = 0;
    let links = [];
    for(let l of this.state.link) {
      links.push(<a key={key++}>{l}</a>);
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
