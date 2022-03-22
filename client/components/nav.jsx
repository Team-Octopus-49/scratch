import React from 'react';


const Nav = () => {

    return (
    <div className='navBar, containerRight'>
        <form className='searchBar, containerRight'>
            <input type="text" id="searchTxt"></input>
            <button>Search</button>
        </form>

        <div className='containerRight'>
            <img src="" alt="history"/>
            <img src="" alt="favorite"/>
            <h4>Hi, user</h4>
        </div>
    </div>
    )
}


export default Nav;