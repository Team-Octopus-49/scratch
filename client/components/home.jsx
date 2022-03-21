import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";

class Home extends Component{
    constructor(props){
      super(props);
    }
    render(){
        // const getHome = () => {
        //   // if ("#username".value === '') {
        //   //   alert('username cannot be blank');
        //   // // check if height is not a number
        //   // } else if ("#password".value === '') {
        //   //   alert('password cannot be blank, what kinda of hacker are you ?');
        //   // } else {
        //   //   const body = {
        //   //     "#username" ,
        //   //     password
        //   //   }
        //   // }
        //   fetch('/api/signin', {
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //       username : ("#username").value,
        //       password: ("#password").value
        //     }
        //     )
        //   })
        //   .then(data => {
        //     return data.json()
        //   })
        //   .then(res=> {
        //       console.log(res)
        //   })
        //   .catch((err)=> {
        //       console.log('error')
        //   });
        // }
        return (
            <h1>
            <Link to='/item'> Add New Item</Link> |{" "}
            <Link to='/mycloset'> My Closet</Link> 
            </h1>
            );
      }
  }
  
  export default Home