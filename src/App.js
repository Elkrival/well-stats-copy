import React, { Component } from 'react';
import Header from './components/Header/header'
import About from './components/About/about'
import Features from './components/Features/features'
import Industries from './components/Industries/industries'
import BusinessPropositions from './components/BusinessValue/business_value'

class App extends Component {
 render() {
  return (
   <div>
    <Header />
    <About />
    <BusinessPropositions />
    <Features />
    <Industries />
   </div>
   );
 }
}

export default App;
