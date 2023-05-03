// Action Creator
export const selectSong = (song) => {
    return {
        type: 'SELECT_SONG',
        paylaod: {
            songName: song.title,
            songDuration: song.duration,
            songId: song.id,
        }
    }
}