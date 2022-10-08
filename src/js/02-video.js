import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const refs = {
  iframe: document.querySelector('#vimeo-player'),
};
const playerEl = new Player(refs.iframe);
const onPlay = function(data) {
   localStorage.setItem('videoplayer-current-time', data.seconds);
 };

playerEl.on('timeupdate', throttle(onPlay, 1000));
playerEl.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);