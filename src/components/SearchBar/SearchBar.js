import React from "react";
import './SearchBar.css'

function SearchBar() {
    return (
        <div className="search-container">
            <input className="search-input" type='text' placeholder="search songs..."></input>
            <button className="search-btn">Search</button>
        </div>
    );
}

export default SearchBar;