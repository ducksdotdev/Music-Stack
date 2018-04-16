import Service from '@ember/service';

export default Service.extend({
  song: null,
  progress: 0,
  interval: null,
  paused: true,
  audioObj: null,
  init() {
    this._super(...arguments);
    this.set('song', {
      duration: 0,
      title: "Title",
      artist: 'Artist',
      album: 'Album'
    });
  },
  setSong(song) {
    this.set('song', song);
    this.set('progress', 0);
    this.set('interval', null);
    this.set('paused', true);
    this.set('audioObj', new Audio(this.get('song.preview')));
    this.pausePlay();
  },
  startProgress() {
    const __self = this;
    if (!__self.get('interval')) {
      __self.set('interval', setInterval(function () {
        let progress = __self.get('progress');
        if (progress >= __self.get('playing.song.duration')) __self.send('goNext');
        else __self.set('progress', __self.get('audioObj').currentTime);
      }, 250));
    }
  },
  pausePlay() {
    let isPaused = !this.get('paused');
    if (this.get('song.duration') > 0)
      this.set('paused', isPaused);
    else this.set('paused', true);

    if (isPaused) {
      clearInterval(this.get('interval'));
      this.get('audioObj').pause();
      this.set('interval', null);
    } else {
      this.get('audioObj').play();
      this.startProgress();
    }
  },
  goNext() {
    // TODO
    this.set('progress', 0);
  },
  goPrevious() {
    // TODO
    this.set('progress', 0);
  },
  pickTime(time) {
    let duration = this.get('song.duration');
    this.get('audioObj').currentTime = duration * time / 100;
    this.set('progress', duration * time / 100);
  }
});
