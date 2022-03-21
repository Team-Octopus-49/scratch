import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";


class SignUp extends Component{
    constructor(props){
      super(props)
      // this.state = {
      //   username,
      //   password
      // }
    }
    render(){
      const saveCredentials = (e) => {
        const accountSelector = {
          username: document.querySelector("#username").value,
          password: document.querySelector("#psw").value
        }
        console.log(accountSelector)
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
        fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            accountSelector: accountSelector
          })
        })
        .then(data => {
          console.log("1")
        })
        .catch((err)=> {
            console.log('error')
        });
      }
      return (
        // <form method="post">
        <div className="container">
        <h1> Sign Up </h1>
        <label name ="username"><b> Username </b></label>
        <input type="text" placeholder="Enter Username" id="username"required/>
        <label  name="psw"><b> Password </b></label>
        <input type="password"  placeholder="Enter Password" id="psw" required/>
        <Link to='/home' className='backLink'><button type="submit" onClick={saveCredentials}> Sign Up </button></Link>
        </div>
        // </form>
      );
    }
}

export default SignUp;



// //  <button type="submit">Login</button>
// //  <label>
// //  <input type="checkbox" checked="checked" name="remember"> Remember me </input>
// // </label> */}

// import React, { Component } from 'react';
// import { render } from 'react-dom';

// const signUp = () => {
//   if (username === '') {
//     alert('username cannot be blank');
//   // check if height is not a number
//   } else if (password === '') {
//     alert('password cannot be blank, what kinda of hacker are you ?');
//   } else {
//     const body = {
//       username,
//       password
//     };
//   fetch('/api/signup', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'Application/JSON'
//     },
//     body: JSON.stringify(body)
//   })
//   .then(data => {
//     return data.json()
//   })
//   .then(res=> {
//       console.log(res)
//   })
//   .catch((err)=> {
//       console.log('error')
//   })
// }

// class SignUp extends Component{
//     constructor(props){
//       super(props);
//
//     }
//     render(){
//       return (
//       <div className="container">
//       <h1> Sign Up </h1>
//       <label for="uname"><b> Username </b></label>
//       <input type="text" placeholder="Enter Username" name="uname" required/>
//       <label for="psw"><b> Password </b></label>
//       <input type="password" value=password placeholder="Enter Password" name="psw" required/>
//       <button type="submit" onClick = {signUp}> Login </button>
//       </div>
//       );
//     }
// }

// export default SignUp


// //  <button type="submit">Login</button>
// //  <label>
// //  <input type="checkbox" checked="checked" name="remember"> Remember me </input>
// // </label> */}