import React, { Component } from 'react';

import './Components.css';

class About extends Component {
  render() {
    return (
      <div className="header">
      <h1>Clint</h1>
      <p>This is about me.</p>
      <Route path="/about" component={About} />
      </div>
    );
  }
}

export default About;
