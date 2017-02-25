import React, {Component, PropTypes} from "react";
let adsbygoogle = null;

class GaAds extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    setTimeout(() => {
      (adsbygoogle = window.adsbygoogle || []).push({});
      this.setState({});
    }, 500);
    // console.log(!!adsbygoogle);
  }

  render() {
    let props = {};
    props['className'] = "adsbygoogle";
    props['style'] = {display: "block"};
    props['data-ad-client'] = "ca-pub-1456484850994926";
    props['data-ad-slot'] = "2251991893";
    props['data-ad-format'] = "auto";

    return(<ins {...props}/>);
    //return(<div style={{height: "50px", backgroundColor: "#DDD"}}/>);
  }
}

GaAds.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default GaAds;
