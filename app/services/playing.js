import Service from '@ember/service';

export default Service.extend({
  song: null,
  progress: 0,
  interval: null,
  paused: true,
  init() {
    this._super(...arguments);
    this.set('song', {
      duration: 0
    });
  },
  setSong(song) {
    const isFirstSong = this.get('song.duration') === 0;
    this.set('song', song);
    this.set('progress', 0);
    if (isFirstSong) this.pausePlay();
  },
  startProgress() {
    const __self = this;
    if (!__self.get('interval')) {
      __self.set('interval', setInterval(function () {
        let progress = __self.get('progress');
        if (progress >= __self.get('playing.song.duration')) __self.send('goNext');
        else __self.set('progress', progress + .25);
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
      this.set('interval', null);
    } else {
      this.startProgress();
    }
  },
  goNext() {
    this.set('progress', 0);
  },
  goPrevious() {
    this.set('progress', 0);
  },
  pickTime(time) {
    this.set('progress', this.get('song.duration') * time / 100);
  }
});
