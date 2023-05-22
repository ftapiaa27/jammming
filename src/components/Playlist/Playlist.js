import React, { useState } from "react";
import Tracklist from "../Tracklist/Tracklist";
import './Playlist.css';

function Playlist({tracks, handleRemove, handleSave }) {
    const [title, setTitle] = useState('New Playlist');
    
    function handleRename(event) {
        setTitle(event.target.value);
    }

    function save() {
        handleSave(title)
        document.getElementById("playlist-name").value = "";
    }

    return (
        <div className="playlist">
            <input 
                id="playlist-name" 
                type="text" 
                placeholder="New Playlist"
                onChange={handleRename}
            ></input>
            <Tracklist 
                tracks={tracks}
                operator='remove' 
                handleClick={handleRemove}
            />
            <button 
                className="save-btn"
                onClick={save}
            >Save to Spotify</button>
        </div>
    );
}

export default Playlist;