import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {

    songslist() {
        return this.props.songs.map((song) => {
            return (
                <div key={song.id}>
                    <h3>Song Title: {song.title}</h3>
                    <label>Song Duration: {song.duration}</label>
                    <br></br>
                    <br></br>
                    <label>Song Id: {song.id}</label>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                SongList
                {this.songslist()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        songs: state.songs
    };
}


export default connect(mapStateToProps)(SongList);