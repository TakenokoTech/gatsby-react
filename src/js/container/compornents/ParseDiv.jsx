import React, {Component, PropTypes} from "react";

class ParseDiv extends Component {

  componentDidMount(){

  }

  createMarkup() {
    return {__html: this.props.children};
  }

  render() {
    return (<div className={this.props.className} dangerouslySetInnerHTML={this.createMarkup()}/>);
  }
}

ParseDiv.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
export default ParseDiv;
