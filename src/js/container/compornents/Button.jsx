import React, { Component } from 'react';

class Button extends Component {

  componentDidMount(){
    console.log("componentDidMount");
  }

  render() {
    const className = this.props.className || "btn";

    return (
      <div className={className} onClick={this.props.onClick}>{this.props.children}</div>
    );
  }
}

export default Button;
