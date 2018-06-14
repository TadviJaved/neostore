import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topheader from './components/Topheader.js';
import HomeSlider from  './components/HomeSlider.js';
import Products from './components/Products.js';
import Bottomfooter from './components/Bottomfooter.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topheader></Topheader>
        <HomeSlider/>
        <Products/>
        <Bottomfooter></Bottomfooter>
      </div>
    );
  }
}

export default App;
