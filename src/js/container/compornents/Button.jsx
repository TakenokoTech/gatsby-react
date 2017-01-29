import React, { PropTypes } from 'react';
import BaseComponent from "./BaseComponent.jsx";

class Button extends BaseComponent {

  componentDidMount(){
    console.log("componentDidMount");
  }

  render() {
    let className = this.props.className || (this.props.noRipple ? "btn" : "btn waves-effect");
    className = this.addClass(className, {shadow: 1});
    const Tab = this.props.Tag || "a";

    return (
      <Tab className={className} onClick={this.props.onClick}>{this.props.children}</Tab>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  noRipple: PropTypes.bool,
  Tag: PropTypes.string,
};

export default Button;
