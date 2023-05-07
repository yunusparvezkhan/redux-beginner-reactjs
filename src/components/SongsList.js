import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedSongReducer } from '../reducers/reducerSlice';

const SongsList = () => {
    const songs = useSelector((state) => state.reducers.songs)
    const selectedSong = useSelector((state) => state.reducers.selectedSong)
    const dispatch = useDispatch();


    const renderSongslist = () => {
        return songs.map((song) => {
            return (
                <div className='item' key={song.id}>
                    <div className='content'>{song.title}</div>
                    <div className='right floated content' >
                        <button className='ui button primary' onClick={() => { dispatch(selectedSongReducer(song)) }}>Select</button>
                    </div>
                    <br />
                </div>
            )
        })
    }

    return (
        <div>
            {renderSongslist()}
            {console.log(selectedSong)}
        </div>
    )
}

export default SongsList