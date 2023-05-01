// Action Creator
export const selectSong = (songName, songId) => {
    return {
        type: 'SELECT_SONG',
        paylaod: {
            songName: songName,
            songId: songId
        }
    }
}