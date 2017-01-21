import React, {Component, PropTypes} from "react";

class Link extends Component {

  componentDidMount(){

  }

  onClick() {

  }

  render() {
    let props = {};
    props['className'] = this.props.className || "";
    props['href'] = (this.props.attr["href"] && this.props.attr["href"].value) || null;
    if(!props['href']) delete props.href;

    return (
      <div className='_link'>
        <div>☆link</div>
        <a {...props}>{this.props.children}</a>
      </div>
    );
  }
}

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  attr: PropTypes.object,
};
export default Link;
