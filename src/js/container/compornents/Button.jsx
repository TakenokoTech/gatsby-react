import React, { Component, PropTypes } from 'react';

class Button extends Component {

  componentDidMount(){
    console.log("componentDidMount");
  }

  render() {
    const className = this.props.className || (this.props.noRipple ? "btn" : "btn waves-effect");
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
