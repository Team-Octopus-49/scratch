import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import './style/style.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = { "username": "Sung" }
  }

  render(){
    return (
      <div className='containerCenter'>
        <h1>
          <Link to='/signin'> Sign In</Link> |{" "}
          <Link to='/signup'> Sign Up</Link> 
        </h1>
      </div>
    );
  };
}


export default App;

