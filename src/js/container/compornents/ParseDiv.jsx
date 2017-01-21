import React, {Component, PropTypes} from "react";

class ParseDiv extends Component {

  componentDidMount(){

  }

  createMarkup() {
    return {__html: this.props.children};
  }

  render() {
    const Tag = this.props.Tag || "div";
    return (<Tag className={this.props.className} dangerouslySetInnerHTML={this.createMarkup()}/>);
  }
}

ParseDiv.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  Tag: PropTypes.string,
};
export default ParseDiv;
