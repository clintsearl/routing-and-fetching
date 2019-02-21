import React, { Component } from 'react';

import './Components.css';
// import { noConflict } from 'q';

class Subscribe extends Component {
  state ={
    name: "",
    age: ""
  }

  getPeople = async ()=>{
    return fetch("http://localhost:4000")
    .then(results=> {
      return results.json()
    })
    .then(data => {
      this.setState({name: data})
    })
  }
 handleSubmit = e =>{
   e.preventDefault()
   const data = JSON.stringify({ ...this.state})
   fetch('http://localhost:4000',{
     method:'POST',
     body:data,
     headers: {
       "Content-Type": "application/json"
     }
   })
 }
 
//  const see =console.log(state)

  render() {
    console.log(this)
    return (
      


    <div>
      <h3>Enter your information to be added in the database</h3>
      {/* onChange-{e => this.setState} */}
      {/* <Route path="/about" component={About} /> */}
      
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            className="form-control" 
            id="name"
            placeholder="Enter Name" 
            onChange ={e => this.setState({name: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" className="form-control" id="age" placeholder="Age"
            onChange ={e => this.setState({age: e.target.value})}/>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="subscribe"/>
            <label className="form-check-label" htmlFor="subscribe">Subscribe</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      
      </div>
    );
  }
}

export default Subscribe;
