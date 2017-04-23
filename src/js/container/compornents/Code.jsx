import React, { PropTypes } from 'react';
import {PrismCode} from "react-prism";
import BaseComponent from "./BaseComponent.jsx";

class Code extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      hideCode: true
    }
  }

  componentDidMount(){}

  onClickButton() {
    this.setState({hideCode: !this.state.hideCode});
  }

  render() {
    const reg = ["<![CDATA[|" , "|]]>"];
    let text = this.props.children;
    for(let r of reg) text = text.replace( r, "" );

    let icon = "icon ";
    let divClass = ""
    let preClass = "line-numbers ";
    let btnClass = "btn-floating waves-effect waves-light codeButton ";
    if(this.state.hideCode) {
      divClass += "hidecode";
      btnClass += "green";
      icon += "fi-arrow-down";
    } else {
      divClass += "showcode";
      btnClass += "red";
      icon += "fi-arrow-up";
    }

    return (
      <div className="_code">
        <div className={divClass}>
          <pre className={preClass}><PrismCode className="language-javascript">{text}</PrismCode></pre>
        </div>
        <div className={btnClass} onClick={()=>this.onClickButton()}><i className={icon} /></div>
      </div>
    );
  }
}

Code.propTypes = {
  className: PropTypes.string,
};

export default Code;
