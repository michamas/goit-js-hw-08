import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// klucz do local storage
// kapitaliki - zmienne, ktore maja sluzyc w calej aplikacji
const STORAGE_KEY = 'videoplayer-current-time';

const trackTime = ({ seconds } = 0) => {
  localStorage.setItem(STORAGE_KEY, seconds);
};

const lastTimeFinished = () => {
  return localStorage.getItem(STORAGE_KEY);
};

player
  .setCurrentTime(lastTimeFinished())
  .then(function (seconds) {
    console.log(seconds);
  })
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
player.on('timeupdate', _.throttle(trackTime, 1000));
