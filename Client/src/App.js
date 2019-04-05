import React, { Component } from 'react';
import './App.css';
import TopNavigation from './components/topNavigation.js';
import SideNavigation from './components/sideNavigation.js';
import Routes from './components/Routes';
import Footer from './components/Footer.js';

class App extends Component {
  
  render() {
    return (
      <div>
        <TopNavigation/>
        <SideNavigation />

        <main id="content">
            <Routes />
        </main>
        <Footer/>
      </div>
      
    );
  }
}

export default App;
