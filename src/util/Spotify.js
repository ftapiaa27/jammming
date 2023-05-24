import { useEffect, useState } from "react";
import './Spotify.css';
const CLIENT_ID = 'f20d3c2d07fc40fca15f327ebcec272c';
// const REDIRECT_URI = 'http://localhost:3000/';
const REDIRECT_URI = 'https://main--jammmingfta.netlify.app/';
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";


function Spotify() {
    const [token, setToken] = useState('');

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem('token');

        if (!token && hash) {
            token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];

            window.location.hash = '';
            window.localStorage.setItem('token', token);
            window.location.reload(false);
        }

        setToken(token);
    }, []);

    function logout() {
        setToken('');
        window.localStorage.removeItem('token');
        window.location.reload(false);
    };

    if (!token) {
        return (
            <div className="log">
                <img src='./media/spotify.png'/>
                <a 
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-public`}>
                    Login to Spotify</a>
            </div>
        );
    } else {
        return (
            <button className="logout-btn" onClick={logout}>Logout</button>
        );
    }
}

const baseUrl = 'https://api.spotify.com/v1';
const SpotifyFunctions = {
    validateToken() {
        let token = window.localStorage.getItem('token');
        if (!token) {
            window.location.reload(false);
        }
        return token;
    },

    async search(term) {
        let token = SpotifyFunctions.validateToken();
        const searchRequestEndpoint = '/search?type=track&';
        const requestParams = `q=${term}`;
        const url = baseUrl + searchRequestEndpoint + requestParams
        try { 
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                const dataToReturn = jsonResponse.tracks.items.map(track => (
                    {
                        id: track.uri,
                        name:   track.name,
                        artist: track.artists[0].name,
                        album:  track.album.name
                    }
                ));
                return dataToReturn;
            }
            throw new Error('Unable to fetch.')
        } catch (error) {
            console.log(error);
        }
        console.log('Outside of try')
    },

    savePlaylist(name, urisList){
        let token = SpotifyFunctions.validateToken();
        const userRequestEndpoint = '/me';
        let userId;
        return fetch((baseUrl + userRequestEndpoint), {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => 
            response.json()
        ).then(jsonResponse => { 
            userId = jsonResponse.id;
            return fetch((baseUrl + `/users/${userId}/playlists`), {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    'name': name,
                    'description': 'New playlist created with Jammmer'
                })
            })
        }).then(response => response.json()
        ).then(jsonResponse => {
            const playlistId = jsonResponse.id;
            return fetch((baseUrl + `/users/${userId}/playlists/${playlistId}/tracks`), {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    uris: urisList
                })
            })
        }).then(response => response.json());
    }
}


export { Spotify, SpotifyFunctions };