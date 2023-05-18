import React from "react";
import './SearchBar.css'

function SearchBar() {
    return (
        <form>
            <input className='searchbar' type='text' placeholder="search songs..."></input>
            <input className='inputbtn' type='submit' value='Search'></input>
        </form>
    );
}

export default SearchBar;