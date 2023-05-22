import React, { useState } from "react";
import Track from "../Track/Track";
import './Tracklist.css';

function Tracklist ({tracks, handleClick, operator}) {
    
    return (
        <div className="track-list">
            {
                tracks.map(track => 
                    <Track 
                        name={track.name} 
                        artist={track.artist} 
                        album={track.album} 
                        key={track.id}  
                        operator={operator}
                        handleClick={() => handleClick(track)}
                    />
                )
            }
        </div>
    );
}

export default Tracklist;