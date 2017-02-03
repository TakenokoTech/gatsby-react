import React, { Component } from 'react';

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
    console.log(this.props.routeParams.key);
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
    const routeKay = this.props.routeParams.key;
    return (
      <div className="App">
        <div className="root">
          <Header/>
          <Contents onLoad={this.onLoad} routeKay={routeKay}/>
          <Footer/>
        </div>
        <Overlay overlay={this.state}/>
      </div>
    );
  }
}

export default App;
