import React, { Component } from 'react';
// import {Router, Route, Switch} from react-router-dom
import './App.css';
// import Routing from './components/Routing';
import Header from './components/Header'
import Subscribe from './components/Subscribe'

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Routing/> */}
       <Header/>
       <Subscribe/>

      </div>
    );
  }
}

export default App;
