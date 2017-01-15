import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/index.css';
// import '../css/App.css';

// import Component
import Header from './container/Header.jsx';
import Contents from './container/Contents.jsx';
import Footer from './container/Footer.jsx';
import Overlay from './container/Overlay.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="root">
          <Header/>
          <Contents/>
          <Footer/>
        </div>
        <Overlay/>
      </div>
    );
  }
}

export default App;
