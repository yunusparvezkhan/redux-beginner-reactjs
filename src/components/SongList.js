import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {

    songslist() {
        return this.props.songs.map((song) => {
            return (
                <div>
                    <h3>{song.title}</h3>
                    <label>{song.duration}</label>
                    <label>{song.id}</label>
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