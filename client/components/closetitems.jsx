import React from 'react';
import { render } from 'react-dom';

const ClosetItems = (info) => {
    const {
        photo, name, category, color, brand, size, note, ID 
    } = info;

    // render(){
    return (
        <article className="itemCard">
            <div className="itemHeadContainer"> {/* select box, photo, update btn, delete btn */}
                <form>
                    <input type="checkbox" id={ID} name={ID}></input>
                    <img className="itemPhoto" src={photo}></img>
                    <input type="submit" name="update">Update</input>
                    <input type="submit" name="delete">Delete</input>
                    
                </form>
            </div>
            <ul className='itemDetailsList'> {/* name, brand, size, note */}
                <li className='itemDetail'>{name}</li> 
                <li className='itemDetail'>{brand}</li> 
                <li className='itemDetail'>{size}</li> 
                <li className='itemDetail'>{note}</li> 
            </ul>
        </article>
    )
    // }
};
    
export default ClosetItems;