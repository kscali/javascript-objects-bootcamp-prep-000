var playlist = new Object();
  playlist.artistName = songTitle;


function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return Object.assign({}, playlist, {[artistName]: songTitle});
}
updatePlayList();

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
removeFromPlaylist();