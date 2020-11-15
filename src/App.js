
import React, {Component, useState} from "react"
import styled from "styled-components";
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import HeroSection from './components/HeroSection'
import ProductsSection from './components/ProductsSection';

class App extends Component {

  state = {
    menuStatus: 'open',
    style:"menu"
  }

  switcher = () => {
  switch(this.state.menuStatus)
  {
    case "open":
      this.setState({
        menuStatus:"close",
        style:"menu active"
      });
      break;
    case "close":
      this.setState({
        menuStatus:"open",
        style:"menu"
      });
      break;
  }
 }
render(){

  return (
    <div className="App">

      <Header toggler={this.switcher}/>
      <HeroSection />
      <ProductsSection />
      <Cart style={this.state.style} toggler={this.switcher}/>
    </div>
  );
} 
}

export default App;
