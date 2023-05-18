import React, { useState } from "react";
import Track from "../Track/Track";
import './Tracklist.css';

// const tracksArray = [
//     {name:'Track1', artist:'Artist (ft. Other Dude)', album:'The album Vol.II', id:'1'},
//     {name:'Track2', artist:'Artist (ft. Other Dude)', album:'The album Vol.II', id:'2'},
//     {name:'Track3', artist:'Artist (ft. Other Dude)', album:'The album Vol.II', id:'3'},
//     {name:'Track4', artist:'Artist (ft. Other Dude)', album:'The album Vol.II', id:'4'},
//     {name:'Track5', artist:'Artist (ft. Other Dude)', album:'The album Vol.II', id:'5'},
// ]

function Tracklist ({tracks}) {
    // const [tracks, setTracks] = useState(tracksArray);
    
    return (
        <div className="track-list">
            <input className="playlist-name" type="text" placeholder="Playlist Name"></input>
            {
                tracks.map(track => 
                // <li key={track.id}>
                    <Track name={track.name} artist={track.artist} album={track.album} key={track.id} section='playlist'/>
                // </li>
                )
            }
            <button className="save-btn">Save to Spotify</button>
        </div>
    );
}

export default Tracklist;