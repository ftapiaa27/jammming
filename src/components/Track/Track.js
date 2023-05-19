import React from 'react';
import './Track.css';

function Track({name, artist, album, section, handleClick}) {
    const operator = section === 'search-res' ? '+' : '-';
    
    return (
        <>
            <div className='track'>
                <div>
                    <div className='name'>{name} - {artist}</div>
                    <div className='album'>{album}</div>
                </div>
                <button className='select-btn' onClick={handleClick}>{operator}</button>
            </div>
            <div className='separator'></div>
        </>
    );
}

export default Track;