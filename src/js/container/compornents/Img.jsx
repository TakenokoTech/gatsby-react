import React, {Component, PropTypes} from "react";

class Img extends Component {

  componentDidMount(){

  }

  onClick() {

  }

  render() {
    let props = {};
    props['src'] = this.props.attr.src && this.props.attr.src.value || null;
    if(!props['src']) return null;

    props['className'] = this.props.className || null;
    if(!props['className']) delete props.className;

    return (
      <div className='_img'>
        <img {...props} />
      </div>
    );
  }
}

Img.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  attr: PropTypes.object,
  description: PropTypes.string
};
export default Img;
