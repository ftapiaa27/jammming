import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Tracklist from './components/Tracklist/Tracklist';

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

  function addTrack(index) {
    console.log(typeof index)
    // if (playlistTracks.find(track => track.id == ((Number(index)) + 1))) {
    //   console.log('repeated');
    // }
    setPlaylistTracks([...playlistTracks, searchRes[index]]);
    // console.log(playlistTracks);
  }

  function handleRemove() {

  }

  return (
    <div className="App">
      <header>
        <h1>Ja<span>mmm</span>ing</h1>
      </header>
      <main>
        <SearchBar />
        <SearchResults tracks={searchRes} handleAdd={addTrack}/>
        <Tracklist tracks={playlistTracks}/>
      </main>
    </div>
  );
}

export default App;
