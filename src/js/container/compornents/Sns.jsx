import React, {Component, PropTypes} from "react";
import hatelogo from "../../../images/logo/hatenablog-logo.svg";

class Sns extends Component {

  componentDidMount(){

  }

  openFacebook(url) {
    window.open(url, 'FBwindow', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes');
    return false;
  }

  openGoogle(url) {
    window.open(url,'Gwindow', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes');
    return false;
  }

  render() {
    const liClass = "sns_button "
    + "z-depth-1 "
    + "waves-effect waves-light ";

    const url = window.location.href;
    const title = this.props.title || "";
    const category = this.props.category || "";
    // const hatebuHref = "http://b.hatena.ne.jp/entry/{" + url + "}";
    const twitterHref = "https://twitter.com/intent/tweet?text=" + title + "&url=" + url +"&hashtags=" + category;
    const facebookHref = "http://www.facebook.com/share.php?u=" + url;
    const googleHref = "https://plus.google.com/share?url=" + url;
    const linkedinHref = "http://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + title;

    return (
      <div className="sns_component">
        <div className="_sns_title">シェアする!!</div>
        <ul>
          <a target="_blank" disabled={true}><li className={liClass + "hatebu"}><img alt="" src={hatelogo}/></li></a>
          <a href={twitterHref} rel="nofollow" target="_blank"><li className={liClass + "twitter"}><i className="fi-social-twitter" /></li></a>
          <a onClick={() => this.openFacebook(facebookHref)}><li className={liClass + "facebook"}><i className="fi-social-facebook" /></li></a>
          <a onClick={() => this.openGoogle(googleHref)}><li className={liClass + "googleplus"}><i className="fi-social-google-plus" /></li></a>
          <a href={linkedinHref} rel="nofollow" target="_blank"><li className={liClass + "linkedin"}><i className="fi-social-linkedin" /></li></a>
        </ul>
      </div>
    );
  }
}

Sns.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  title: PropTypes.string,
  category: PropTypes.string
};
export default Sns;