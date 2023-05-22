import React, { useState } from "react";
import './SearchBar.css'

function SearchBar({ handleSearch }) {
    const [term, setTerm] = useState('nada');

    const handleTermChange = event => {
        setTerm(event.target.value);
    };

    return (
        <div className="search-container">
            <input 
                className="search-input" 
                type='text' 
                placeholder="search songs..."
                onChange={handleTermChange}    
            ></input>
            <button className="search-btn" onClick={() => {handleSearch(term)}}>Search</button>
        </div>
    );
}

export default SearchBar;