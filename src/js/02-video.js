import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// klucz do local storage
// kapitaliki - zmienne, ktore maja sluzyc w calym pliku/aplikacji
const STORAGE_KEY = 'videoplayer-current-time';

function trackTime({ seconds } = 0) {
  console.log({ seconds });
  localStorage.setItem(STORAGE_KEY, seconds);
}

player.on('timeupdate', trackTime);

player
  .setCurrentTime(trackTime())
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;
      default:
        // some other error occurred
        break;
    }
  });
