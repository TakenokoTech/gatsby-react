import React, {Component, PropTypes} from "react";
// import setting from "../../setting.jsx";
let adsbygoogle = null;

class GaAds extends Component {

  componentDidMount(){
    if(adsbygoogle !== null) {
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
    console.log("componentDidMount", adsbygoogle);
  }

  render() {
    let props = {};
    props['className'] = "adsbygoogle";
    props['style'] = {display: "block"};
    // props['data-ad-client'] = "ca-pub-1456484850994926";
    // props['data-ad-slot'] = "2251991893";
    // props['data-ad-format'] = "auto";

    // return(<ins {...props}/>);
    return(<div style={{height: "50px", backgroundColor: "#e08b8b"}}/>);
  }
}

GaAds.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default GaAds;
