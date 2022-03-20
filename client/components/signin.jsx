import React, { Component } from 'react';
import { render } from 'react-dom';

class SignIn extends Component{
    constructor(props){
      super(props);
    }
    render(){
      return (
        <div className="container">
          <h1> Sign In </h1>
          <label for="uname"><b> Username </b></label>
          <input type="text" placeholder="Enter Username" name="uname" required/>
          <label for="psw"><b> Password </b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>
          <button type="submit"> Login </button>
          </div>
          );
    }
}

export default SignIn