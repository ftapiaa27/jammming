import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Tracklist from './components/Tracklist/Tracklist';
import Spotify from './util/Spotify';

const tracksArray = [
  {name:'SearchRes1', artist:'Artist (ft. Other Dude)', album:'The album Vol.II', id:'1'},
  {name:'SearchRes2', artist:'Artist (ft. Other Dude)', album:'The album Vol.II', id:'2'},
  {name:'SearchRes3', artist:'Artist (ft. Other Dude)', album:'The album Vol.II', id:'3'},
  {name:'SearchRes4', artist:'Artist (ft. Other Dude)', album:'The album Vol.II', id:'4'},
  {name:'SearchRes5', artist:'Artist (ft. Other Dude)', album:'The album Vol.II', id:'5'},
]


function App() {
  const [searchRes, setSearchRes] = useState(tracksArray);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  // let loggedIn = false;

  
  // const [token, setToken] = useState('');
  let token = window.localStorage.getItem('token');
  // setToken(window.localStorage.getItem('token'));

  function addTrack(index) {
    let playlistKeys = playlistTracks.map(track=>track.id);
    if (playlistKeys.find(key => key == (index + 1))) {
      return;
    }
    setPlaylistTracks([...playlistTracks, searchRes[index]]);
  }

  function removeTrack(id) {
    setPlaylistTracks(playlistTracks.filter(track => track.id !== id));
  }
  
  return (
    <div className="App">
      <header>
        <h1>Ja<span>mmm</span>ing</h1>
      </header>
      <main>
        {!token ? 
          <>
            <Spotify />
          </> : 
          <>
            <SearchBar />
            <SearchResults tracks={searchRes} handleAdd={addTrack}/>
            <Tracklist tracks={playlistTracks} handleRemove={removeTrack}/>
            <Spotify />
          </>}
        
      </main>
    </div>
      
  );
}

export default App;
