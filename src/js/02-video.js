
import Player from '@vimeo/player';



player.on('play', function () {
  console.log('played the video!');
});
const iframe = document.querySelector('#vimeo-player');
console.log(iframe);
// const player = new Vimeo.Player(iframe);
// console.log(player);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

// const onPlay = function (data) {
//   // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);

// player.on('eventName', function (data) {
//   // data is an object containing properties specific to that event
// });

// var callback = function () {};

// player.off('eventName', callback);
