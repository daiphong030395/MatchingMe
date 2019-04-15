import React, { Component } from 'react';
import './App.css';
import TopNavigation from './components/topNavigation.js';
import SideNavigation from './components/sideNavigation.js';
import Routes from './components/Routes';
import Footer from './components/Footer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLogin: false
    };
  
  }
  componentDidMount(){
    if(localStorage.getItem('user') !== null){
      this.setState({
          isLogin: true
      });
    }
      // window.location.reload();
    
    console.log("ABCDEF")
  }
  render() {
    // window.location.reload();
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
