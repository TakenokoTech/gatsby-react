import React, { Component } from 'react';

class Sideber extends Component {

  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){
    let adsbygoogle;
    (adsbygoogle = window.adsbygoogle || []).push({});
    console.log("componentDidMount", adsbygoogle);
  }

  //==========================================================
  // RENDER
  //==========================================================
  renderAds() {
    return(
      <ins
        className="adsbygoogle"
        style={{display: "block"}}
        // data-ad-client="ca-pub-1456484850994926"
        // data-ad-slot="2251991893"
        // data-ad-format="auto"
      />
    );
  }

  render() {
    const className = this.props.className + " App-sideber";

    return (
      <div className={className}>
        <div className="col-md-12 z-depth-2">コンテンツ</div>
        <div className="col-md-12 z-depth-2">{this.renderAds()}</div>
      </div>
    );
  }

}

export default Sideber;