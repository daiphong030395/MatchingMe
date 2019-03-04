import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import SideBar from './components/SideBar.js';
import Content from './components/Content.js';

class App extends Component {

  render() {
    return (
      <div>
        <div className="App ">
          <h1>REACT APP</h1>
        </div>
        <Header />
        <SideBar />
        
        <main id="content" className="p-3" >
          <Content />
        </main>
      </div>
      
    );
  }
}

export default App;
