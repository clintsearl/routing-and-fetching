import React, { Component } from 'react';
// import {Router, Route, Switch} from react-router-dom
import './App.css';
import Routing from './components/Routing';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Routing/>
      </div>
    );
  }
}

export default App;
