import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";

import ClosetItems from './closetitems.jsx';


class MyCloset extends Component{
    constructor(props){
      super(props);
      this.state = {
        items: [],
      }
    };

    // uncomment this when fetch request works
    // componentDidMount() {
    //   fetch('/api/') // check the end point and get request
    //     .then(res => res.json())
    //     .then((items) => {
    //       if (!Array.isArray(items)) items = [];
    //       return this.setState({
    //         items
    //       });
    //     })
    //     .catch(err => console.log('MyCloset.componentDidMount: get itmes: ERROR: ', err));
    // }

    render(){
    //   const getCredentials = () => {
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
    //     fetch('/api/signin', {
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         username : ("#username").value,
    //         password: ("#password").value
    //       }
    //       )
    //     })
    //     .then(data => {
    //       return data.json()
    //     })
    //     .then(res=> {
    //       console.log(res);
    //       // <Link to='/home'> Home</Link> 
    //     })
    //     .catch((err)=> {
    //         console.log('error')
    //     });
    //   }


    // uncomment this when fetch request works
    // const { items } = this.state;
    // const itemCards = items.map((item, i) => {
    //   return (
    //     <ClosetItems
    //       key={i}
    //       info={item}
    //     />
    //   );
    // });

      return (
        <div className="container" >
          <div className='categoryBar'>
            <h1> Category </h1>
            <button type="outerwear"> Outerwear </button> |{" "}
            <button type="tops"> Tops </button> |{" "}
            <button type="pants"> Pants </button>|{" "}
            <button type="skirts"> Skirts </button>|{" "}
            <button type="shoes"> Shoes </button>|{" "}
            <button type="accessories"> Accessories </button>|{" "}
            <Link to='/home'> Home </Link>
          </div>

        {/* add ClosetItem jsx class component and render each item in state*/}

          <div className="itemDisplay">
            {/* {itemCards} */}
          </div>
  
       
        
        </div>
      
          );
    }
}





export default MyCloset;














// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import { Link } from "react-router-dom";


// //
// class myCloset extends Component{
//     constructor(props){
//       super(props);
//       this.state = {pants: 'Levis'};
//     }
//     render(){
//     //   const getCredentials = () => {
//         // if ("#username".value === '') {
//         //   alert('username cannot be blank');
//         // // check if height is not a number
//         // } else if ("#password".value === '') {
//         //   alert('password cannot be blank, what kinda of hacker are you ?');
//         // } else {
//         //   const body = {
//         //     "#username" ,
//         //     password
//         //   }
//         // }
//     //     fetch('/api/signin', {
//     //       headers: {
//     //         'Content-Type': 'application/json'
//     //       },
//     //       body: JSON.stringify({
//     //         username : ("#username").value,
//     //         password: ("#password").value
//     //       }
//     //       )
//     //     })
//     //     .then(data => {
//     //       return data.json()
//     //     })
//     //     .then(res=> {
//     //       console.log(res);
//     //       // <Link to='/home'> Home</Link> 
//     //     })
//     //     .catch((err)=> {
//     //         console.log('error')
//     //     });
//     //   }
//       return (
//         <div className="container" >
//           <h1 > Add a New Item </h1>
//           <button type="outerwear"> Outerwear </button> |{" "}
//           <button type="tops"> Tops </button> |{" "}
//           <button type="pants"> Pants </button>|{" "}
//           <button type="skirts"> Skirts </button>|{" "}
//           <button type="shoes"> Shoes </button>|{" "}
//           <button type="accessories"> Accessories </button>|{" "}
//         <Link to='/home'> Home </Link>

//         <br></br>

//         {/* add ClosetItem jsx class component and render each item in state*/}
//         <ClosetItems/>
//         <h1 > Add a New Item </h1>
        
//         </div>
//         // <div>
//         //     {/* <br></br> */}
//         //  </div>
        
//           );
//     }
// }


// class ClosetItems extends Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//       return(
//         <div className = "row">
//             <div className="column">   
//             <img src= 'https://s7d2.scene7.com/is/image/aeo/0436_2977_922_ob?$pdp-mdg-opt$&fmt=webp' width= "254" height ="254"></img>
//              </div>
//         </div>
//       )
//   }
// }


// export default myCloset

// class ClosetItems extends Component{
//     constructor(props){
//       super(props)
//     }
//     render(){
//         return(
//           <div className = "row">
//               <div className="column">   
//               <img src= 'https://s7d2.scene7.com/is/image/aeo/0436_2977_922_ob?$pdp-mdg-opt$&fmt=webp' width= "254" height ="254"></img>
//                </div>
//           </div>
//         )
//     }
//   }