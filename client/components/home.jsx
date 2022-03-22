import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import Nav from "./nav.jsx";


class Home extends Component{
    constructor(props){
      super(props);
    }
    render(){
       
        return (
          <div>
            <Nav />
          
            <div className='containerCenter'>
              <h1>
              <Link to='/item'> Add New Item</Link> |{" "}
              <Link to='/mycloset'> Check My Closet</Link> 
              </h1>
            </div>
          </div>
            );
      }
  }
  
  export default Home