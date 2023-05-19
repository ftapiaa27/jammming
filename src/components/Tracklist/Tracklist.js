import React, { useState } from "react";
import Track from "../Track/Track";
import './Tracklist.css';

function Tracklist ({tracks, handleRemove}) {
    
    return (
        <div className="track-list">
            <input className="playlist-name" type="text" placeholder="Playlist Name"></input>
            {
                tracks.map(track => 
                    <Track name={track.name} artist={track.artist} 
                    album={track.album} key={track.id} 
                    section='playlist' handleClick={() => handleRemove(track.id)}/>
                )
            }
            <button className="save-btn">Save to Spotify</button>
        </div>
    );
}

export default Tracklist;