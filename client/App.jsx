import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";


class App extends Component{
  constructor(props){
    super(props);
    this.state = { "name": "Sung" }
  }

  render(){
    return (
      <h1>
        <Link to='/signin'> Sign In</Link> |{" "}
        <Link to='/signup'> Sign Up</Link> 
      </h1>
    );
  };
}



// class SignInOrUp extends Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <Link to="/login" className="backLink">
//           <button type="button" className="btnSecondary">
//               Back to all items
//           </button>
//         </Link>
//     )
//   }
// }




// // const newPage = <SignIn />

// function SignUp() {
//   return <div>Welcome to Sign Up</div>;
// }

//create a route using browserrouter from react-router-dom module
//    npm install react-router-dom
//should be within the render in HeroPage component
// ie:
// <Router>
//   <Switch>
//      <Route/>   --> route to signIn
//      <Route/>   --> route to signUp
//   </Switch>
//</Router>



// render(<App />, document.querySelector('#root'))
export default App;


// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = { "name": "Sung" }
//   }

//   render(){
//     return (
//       <h1>
//         <SignInOrUp/>
//       </h1>
//     )
//   }
// }

// class SignInOrUp extends Component{
//   constructor(props){
//     super(props);
//   }

//   render(){

//     return(
//        <div>
//         <button id = "signin" onClick= {SignIn}> Sign In</button>
//         <button id = "signup" onClick= {SignUp}> Sign Up</button>
//        </div>
//     );
    
//   }
// }

// function SignIn() {
//   window.location = "/signin";
//     return <h1> Welcome to Sign In </h1>;
// }

// const newPage = <SignIn />

// function SignUp() {
//   window.location = "/signup"
//   return <div>Welcome to Sign Up</div>;
// }

// //create a route using browserrouter from react-router-dom module
// //    npm install react-router-dom
// //should be within the render in HeroPage component
// // ie:
// // <Router>
// //   <Switch>
// //      <Route/>   --> route to signIn
// //      <Route/>   --> route to signUp
// //   </Switch>
// //</Router>



// render(<App />, document.querySelector('#root'))
// export default App;












// <Router>
//         <div className='router'>
//         <Link to="/signIn"> Sign In</Link>
//         <Link to="/signUp"> Sign Up</Link>
//         <Switch>
//           <Route exact path = '/signIn'> 
//             <h1> Welcome to Sign In </h1>
//           </Route>
//           {/* <Route exact path = '/signUp'> <SignUp/> </Route> */}
//         </Switch>
//         </div>
// </Router>





