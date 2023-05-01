import { combineReducers } from "redux";

// Reducer functions

const songsListReducer = () => {
    return [
        { title: 'Mahabharat', duration: '3.05', id: 1 },
        { title: 'Tum Prem Ho', duration: '4.16', id: 2 },
        { title: 'Hai Katha Sangram Ki', duration: '3.55', id: 3 },
        { title: 'Ram Siya Ram', duration: '4.25', id: 4 },
        { title: 'Hum Katha Sunate', duration: '4.22', id: 5 },
        { title: 'Samay Samjhayega', duration: '3.33', id: 6 },
        { title: 'Raghapati Raghav Raju Ram', duration: '1.56', id: 7 },
    ]
}

const selectedSongReducer = (songsListReducer = null, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload;
    } else {
        return songsListReducer;
    }
}

combineReducers({
    songs: songsListReducer,
    selectedSong: selectedSongReducer
})

