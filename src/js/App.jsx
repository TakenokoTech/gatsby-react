import React, { Component } from 'react';
// import '../css/index.css';
// import '../css/App.css';

// import Component
import Header from './container/Header.jsx';
import Contents from './container/Contents.jsx';
import Footer from './container/Footer.jsx';
import Overlay from './container/Overlay.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.onLoad = this.onLoad.bind(this);

    this.state = {
      lordingNow: true
    };
  }

  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){
    console.log("componentDidMount");
  }

  //==========================================================
  // ACTION
  //==========================================================
  onLoad() {
    this.setState({lordingNow: false});
  }

  //==========================================================
  // RENDER
  //==========================================================
  render() {
    return (
      <div className="App">
        <div className="root">
          <Header/>
          <Contents onLoad={this.onLoad}/>
          <Footer/>
        </div>
        <Overlay overlay={this.state}/>
      </div>
    );
  }
}

export default App;
