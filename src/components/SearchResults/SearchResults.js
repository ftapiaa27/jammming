import React, { useState } from "react";
import Track from "../Track/Track";
import './SearchResults.css';

function SearchResults({tracks, handleAdd}) {

    return (
        <div className="search-results">
            <h2>Results</h2>
            {
                tracks.map(track => 
                    <Track name={track.name} artist={track.artist} 
                    album={track.album} key={track.id} section='search-res' 
                    handleClick={() => handleAdd(track.id - 1)}/>
                )
            }
        </div>
    );
}

export default SearchResults;