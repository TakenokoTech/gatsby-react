import React, {Component, PropTypes} from "react";

class ParseDiv extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){

  }

  createMarkup() {
    return {__html: this.props.children};
  }

  render() {
    let props = this.props;
    return (<span className={this.props.className} dangerouslySetInnerHTML={this.createMarkup()}/>);
  }
}

ParseDiv.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
export default ParseDiv;
