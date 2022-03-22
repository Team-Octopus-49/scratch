import React from 'react';
import { render } from 'react-dom'; // probably dont need thhis

const ClosetItems = ({info}) => {
    const {
        photo, name, category, color, brand, size, note, ID 
    } = info;

   
    return (
        <article className="itemCard">
            <div className="itemHeadContainer"> {/* check box, name */}
                <form>
                    <input type="checkbox" id={ID} name={ID}></input>
                </form>
                <h3 className='itemName'>{name}</h3>
            </div> 
            <div className='itemPhotoContainer, containerCenter'> {/* photo*/}
                <img className="itemPhoto" src={photo}></img>
            </div>
            <div  className='itemCardBtnContainer, containerCenter'> {/* update and delete btns */}
                <button className='itemCardBtn' name="update">Update</button> 
                <button className='itemCardBtn' name="delete">Delete</button> 
            </div>
            <ul className='itemDetailsList'> {/* name, brand, size, note */}
                <li className='itemDetail'>{name}</li> 
                <li className='itemDetail'>{brand}</li> 
                <li className='itemDetail'>{size}</li> 
                <li className='itemDetail'>{note}</li> 
            </ul>
        </article>
    )
 
};
    
export default ClosetItems;