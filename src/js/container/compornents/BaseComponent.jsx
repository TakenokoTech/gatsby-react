import {Component, PropTypes} from "react";

class BaseComponent extends Component {

  constructor(props) {
    super(props)
    this.addClass = this.addClass.bind(this);
  }

  addClass(className, defaultParam = {}) {
    // insert const
    const addRipple = this.props.addRipple;
    const addShadow = this.props.addShadow;
    const defShadow = defaultParam && defaultParam.shadow;
    // add class
    className += addRipple ? " waves-effect" : "";
    if(!this.props.notShadow) className += addShadow ? (" z-depth-" + addShadow ) : (defShadow ? " z-depth-" + defShadow : "");
    className += this.props.notFocus ? " none-pointer-event" : "";
    return className;
  }

}

BaseComponent.propTypes = {
  addRipple: PropTypes.bool,
  addShadow: PropTypes.number,
  notShadow: PropTypes.bool,
  notFocus: PropTypes.bool,
};
export default BaseComponent;
