import React, {PropTypes} from "react";
import BaseComponent from "./BaseComponent.jsx";

class ParseDiv extends BaseComponent {

  componentDidMount(){

  }

  createMarkup() {
    return {__html: this.props.children};
  }

  render() {
    const Tag = this.props.Tag || "div";
    let className = this.props.className || "";
    className = this.addClass(className);
    return (<Tag className={className} dangerouslySetInnerHTML={this.createMarkup()}/>);
  }
}

ParseDiv.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  Tag: PropTypes.string,
};
export default ParseDiv;
