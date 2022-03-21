import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";

class Item extends Component{
    constructor(props){
      super(props);
    }
    render(){
    //     const clickHandler = (e) => {
    //         const foodSelector = document.querySelector("#food").value
    //         const foodSelector1 = document.querySelector("#food1").value
    //         const foodSelector2 = document.querySelector("#food2").value
    //         console.log(foodSelector)
    //         console.log(foodSelector1)
    //         console.log(foodSelector2)
            
    //         fetch ('/', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //         },
    //             body: JSON.stringify({
    //                 foodSelector: foodSelector,
    //                 foodSelector1: foodSelector1,
    //                 foodSelector2: foodSelector2,
    //             }),
    //     })
    //     .then(data => {
    //         return data.json()
    //     })
    //     .then(res=> {
    //         console.log(res)
    //     })
    //     .catch((err)=> {
    //         console.log('error')
    //     })
    // }
      return (
        <div className="container" >
          <h1 > Add a New Item </h1>
          <label htmlFor="url"><b> Photo Link: </b></label>
          <input type="text" placeholder="Enter Photo Link" name="url" required/>
          <label htmlFor="name"><b> Name: </b></label>
          <input type="text" placeholder="Enter Name" name="name" required/>
          <label htmlFor = "category"><b> Category: </b></label>
          <select name="category" id="category">
            <option value="ChooseOne">Please make a selection</option>
            <option value="Outerwear">Outerwear</option>
            <option value="Pants">Pants</option>
            <option value="Skirts">Skirts</option>
            <option value="Shoes">Shoes</option>
            <option value="Accessories">Accessories</option>
            </select>
            <label htmlFor = "color"><b> Color: </b></label>
            <select name="color" id="color">
            <option value="ChooseOne">Please make a selection</option>
            <option value="White">White</option>
            <option value="Yellow">Yellow</option>
            <option value="Black">Black</option>
            <option value="Grey">Grey</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Brown">Brown</option>
            </select>
            <label htmlFor="brand"><b> Brand: </b></label>
          <input type="brand" placeholder="Enter Brand" name="brand" required/>
          <label htmlFor="size"><b> Size: </b></label>
          <input type="size" placeholder="Enter Size" name="Size" required/>
          <label htmlFor="note"><b> Note: </b></label>
          <input type="note" placeholder="Enter Note" name="Note" required/>
          <button type="submit"> Add </button>
        <Link to='/home'> Cancel </Link>
        </div>
          );
    }
}

export default Item