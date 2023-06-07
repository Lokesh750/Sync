document.addEventListener('DOMContentLoaded', function() {

  // Array to store the songs

  var songs = [

    { title: 'Song 1', source: 'song1.mp3' },

    { title: 'Song 2', source: 'song2.mp3' },

    { title: 'Song 3', source: 'song3.mp3' }

  ];

  var playlist = document.getElementById('song-list');

  var audioPlayer = document.getElementById('audio-player');

  // Add songs to the playlist

  songs.forEach(function(song, index) {

    var li = document.createElement('li');

    li.textContent = song.title;

    li.setAttribute('data-index', index);

    li.addEventListener('click', function() {

      var index = parseInt(this.getAttribute('data-index'));

      playSong(index);

    });

    playlist.appendChild(li);

  });

  function playSong(index) {

    var song = songs[index];

    audioPlayer.src = song.source;

    audioPlayer.play();

  }

});
