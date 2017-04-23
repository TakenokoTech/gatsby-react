import React, { Component } from 'react';

class Overlay extends Component {

  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){}

  //==========================================================
  // ACTION
  //==========================================================
  onClick(e) {
    e.stopPropagation();
  }

  //==========================================================
  // RENDER
  //==========================================================
  renderItem(child){
    return (
      <div className="overlay-item black" onClick={this.onClick}>
        {child}
      </div>
    );
  }

  render() {
    return (
      <div className="App-overlay" onClick={this.onClick}>
        {this.props.overlay.lordingNow ? this.renderItem(<div className="loader">Loading...</div>) : null}
      </div>
    );
  }

}

export default Overlay;
