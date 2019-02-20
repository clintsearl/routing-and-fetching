import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import 'About'
import 'Header'

class Routing extends Component {
  render() {
    return (
      <div className="App">
      <Router>
          <ul>
            <li>
              {/* <Link to="/">Home</Link> */}
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/header">Header</Link>
            </li>
          </ul>
        
        {/* <Route exact path="/" component={App} /> */}
      <Route path="/about" component={About} />
      <Route path="/header" component={Header} />
      </Router>
      </div>
    );
  }
}

export default Routing;
