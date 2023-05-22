import './App.css';
import React, { useCallback, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import {Spotify, SpotifyFunctions} from './util/Spotify';
import Playlist from './components/Playlist/Playlist';

function App() {
  const [searchRes, setSearchRes] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  let token = window.localStorage.getItem('token');

  function addTrack(trackToAdd) {
    
    if (playlistTracks.some(track => track.id === trackToAdd.id)) {
      return;
    }

    setPlaylistTracks([trackToAdd, ...playlistTracks]);
  }

  function removeTrack(trackToRemove) {
    setPlaylistTracks(playlistTracks.filter(track => track.id !== trackToRemove.id));
  }

  const search = useCallback((term) => {
    SpotifyFunctions.search(term).then(setSearchRes);
  }, []);

  function savePlaylist(name) {
    const uris = playlistTracks.map(track => track.id)
    SpotifyFunctions.savePlaylist(name, uris).then(() => {
      setPlaylistTracks([]);
    });
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
            <SearchBar handleSearch={search} />
            <SearchResults tracks={searchRes} handleAdd={addTrack}/>
            <Playlist tracks={playlistTracks} handleRemove={removeTrack} handleSave={savePlaylist}/>
            <Spotify />
          </>}
        
      </main>
    </div>
      
  );
}

export default App;
