import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";

class SignIn extends Component{
    constructor(props){
      super(props);
    }
    render(){
      const getCredentials = () => {
        // if ("#username".value === '') {
        //   alert('username cannot be blank');
        // // check if height is not a number
        // } else if ("#password".value === '') {
        //   alert('password cannot be blank, what kinda of hacker are you ?');
        // } else {
        //   const body = {
        //     "#username" ,
        //     password
        //   }
        // }
        fetch('/api/signin', {
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username : ("#username").value,
            password: ("#password").value
          }
          )
        })
        .then(data => {
          return data.json()
        })
        .then(res=> {
          console.log(res);
          // <Link to='/home'> Home</Link> 
        })
        .catch((err)=> {
            console.log('error')
        });
      }
      return (
        <div className="container" >
          <h1 > Sign In </h1>
          <label htmlFor="username"><b> Username </b></label>
          <input type="text" placeholder="Enter Username" name="username" required/>
          <label htmlFor="psw"><b> Password </b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>
          <button type="submit" onClick={getCredentials}> Log in </button>
          </div>
          );
    }
}

export default SignIn