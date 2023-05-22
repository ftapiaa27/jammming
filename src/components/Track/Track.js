import React from 'react';
import './Track.css';

function Track({name, artist, album, key, handleClick, operator}) {
    const symbol = operator === 'add' ? '+' : '-';
    
    return (
        <>
            <div className='track' key={key}>
                <div>
                    <div className='name'>{name} | {artist}</div>
                    <div className='album'>{album}</div>
                </div>
                <button className='operation-btn' onClick={handleClick}>{symbol}</button>
            </div>
            <div className='separator'></div>
        </>
    );
}

export default Track;