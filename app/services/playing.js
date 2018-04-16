import Service from '@ember/service';

export default Service.extend({
  song: null,
  progress: 0,
  interval: null,
  paused: true,
  audioObj: null,
  playlist: null,
  init() {
    this._super(...arguments);
    this.set('song', {duration: 0});
  },
  setSong(index) {
    const __self = this;
    __self.clearSong();
    __self.set('index', index);
    __self.set('song', __self.get('playlist')[index]);
    __self.set('progress', 0);
    __self.set('paused', true);
    __self.set('audioObj', new Audio(__self.get('song.preview')));
    __self.pausePlay();
  },
  startProgress() {
    const __self = this;
    if (!__self.get('interval')) {
      __self.set('interval', setInterval(function () {
        if (__self.get('audioObj').currentTime >= __self.get('song.duration')) __self.goNext();
        else __self.set('progress', __self.get('audioObj').currentTime);
      }, 100));
    }
  },
  pausePlay() {
    let isPaused = !this.get('paused');
    if (this.get('song.duration') > 0)
      this.set('paused', isPaused);
    else this.set('paused', true);

    if (isPaused) {
      this.clearSong();
    } else {
      this.get('audioObj').play();
      this.startProgress();
    }
  },
  goNext() {
    let index = this.get('index') + 1;
    if (index < this.get('playlist').length)
      this.setSong(index);
    else this.setSong(0);
  },
  goPrevious() {
    let index = this.get('index') - 1;
    if (index <= 0) index = 0;
    this.setSong(index);
  },
  pickTime(time) {
    let duration = this.get('song.duration');
    this.get('audioObj').currentTime = duration * time / 100;
    this.set('progress', duration * time / 100);
  },
  setPlaylist(playlist) {
    this.set('playlist', playlist);
  },
  clearSong() {
    clearInterval(this.get('interval'));
    this.set('interval', null);
    let audioObj = this.get('audioObj');
    if (audioObj)
      audioObj.pause();
  }
});
