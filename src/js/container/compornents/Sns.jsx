import React, {Component, PropTypes} from "react";
import hatelogo from "../../../images/logo/hatenablog-logo.svg";

class Sns extends Component {

  componentDidMount(){

  }

  onClick() {

  }

  render() {
    const liClass = "sns_button "
    + "z-depth-1 "
    + "waves-effect waves-light ";

    return (
      <div className="sns_component">
        <div className="_sns_title">シェアする!!</div>
        <ul>
          <li className={liClass + "hatebu"}><img alt="" src={hatelogo}/></li>
          <li className={liClass + "twitter"}><i className="fi-social-twitter" /></li>
          <li className={liClass + "facebook"}><i className="fi-social-facebook" /></li>
          <li className={liClass + "googleplus"}><i className="fi-social-google-plus" /></li>
          <li className={liClass + "linkedin"}><i className="fi-social-linkedin" /></li>
        </ul>
      </div>
    );
  }
}

Sns.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
export default Sns;