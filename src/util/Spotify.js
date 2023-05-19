import { useEffect, useState } from "react";
import './Spotify.css';
const CLIENT_ID = 'f20d3c2d07fc40fca15f327ebcec272c';
const REDIRECT_URI = 'http://localhost:3000/';
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
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                    Login to Spotify</a>
            </div>
        );
    } else {
        return (
            <button className="logout-btn" onClick={logout}>Logout</button>
        );
    }
    // return (
    //     <div className="log">
    //         <img src='./media/spotify.png'/>
    //         {!token ? 
    //             <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
    //             Login to Spotify</a> :
    //             <button className="logout-btn" onClick={logout}>Logout</button>}
    //     </div>
    // );
}

export default Spotify;