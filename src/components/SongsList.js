import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedSongReducer } from '../reducers/reducerSlice';

import '../styles/stylelib.css';

const SongsList = () => {
    const songs = useSelector((state) => state.reducers.songs)
    const selectedSong = useSelector((state) => state.reducers.selectedSong)
    const dispatch = useDispatch();


    const renderSongslist = () => {
        return songs.map((song) => {
            return (
                <div className='item' key={song.id}>
                    <div className='content songTitle '>{song.title}</div>
                    <div className='right floated content songList-box-button' >
                        <button className='ui button primary' onClick={() => { dispatch(selectedSongReducer(song)) }}>Select</button>
                    </div>
                    <br />
                </div>
            )
        })
    }

    const renderSelectedSongDetails = () => {
        if (selectedSong !== null) {
            return (
                <div>
                    <div className='detail-card' >
                        <h2 className='detail-card-heading' >Selected Song</h2>
                        <h3 className='detail-card-title' >{selectedSong.title}</h3>
                        <label>Song Duration: {selectedSong.duration}</label>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className='component songListCom' >
            <div className='songList'>
                <div className='songList-box'>
                    <h2>Song List</h2>
                    {renderSongslist()}
                </div>
            </div>
            <div className='songDetails' >
                {renderSelectedSongDetails()}
            </div>
        </div>
    )
}

export default SongsList