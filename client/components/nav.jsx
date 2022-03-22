import React from 'react';


const Nav = () => {

    return (
    <div className='navBar, containerRight'>
        <form className='searchBar, containerRight'>
            <input type="text" id="searchTxt"></input>
            <button>Search</button>
        </form>

        <div className='containerRight'>
            <img className="icons" src="https://cdn-icons-png.flaticon.com/512/3531/3531744.png" alt="history"/>
            <img className="icons" src="https://cdn.iconscout.com/icon/free/png-256/favorite-border-1781521-1513841.png" alt="favorite"/>
            <h4>Hi, user</h4>
        </div>
    </div>
    )
}


export default Nav;