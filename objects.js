var playlist = new Object();
 
 playlist = {
   artistNames : songTitles
};
  


function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle;
   return playlist;
}
updatePlayList();

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
removeFromPlaylist();