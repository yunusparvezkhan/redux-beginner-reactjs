import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class SongList extends Component {

    renderSongslist() {
        return this.props.songs.map((song) => {
            return (
                <div className='item' key={song.id}>
                    <div className='content'>{song.title}</div>
                    <div className='right floated content' >
                        <button className='ui button primary' onClick={() => { selectSong(song) }} >Select</button>
                    </div>
                    <br />
                </div>
            )
        })
    }

    render() {
        // console.log(this.props)
        return (
            <div className='ui divided list'>
                {this.renderSongslist()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        songs: state.songs
    };
}


export default connect(mapStateToProps, { selectSong })(SongList);