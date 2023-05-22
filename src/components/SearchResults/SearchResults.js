import React, { useState } from "react";
import Tracklist from "../Tracklist/Tracklist";
import './SearchResults.css';

function SearchResults({tracks, handleAdd}) {
    
    return (
        <div className="search-results">
            <h2>Results</h2>
            <Tracklist
                tracks={tracks} 
                operator='add' 
                handleClick={handleAdd}
            />
        </div>
    );
}

export default SearchResults;