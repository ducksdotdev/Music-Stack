import {helper} from '@ember/component/helper';

export function secondsToReadable(time) {
  let seconds = parseInt(time % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return parseInt(time / 60) + ":" + seconds;
}

export default helper(secondsToReadable);
