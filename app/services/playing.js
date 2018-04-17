import Service from '@ember/service';

export default Service.extend({
  song: null,
  progress: 0,
  interval: null,
  paused: true,
  audioObj: null,
  playlist: [
    {
      "artist": "Four Tet",
      "album": "New Energy",
      // "duration": 252,
      "duration": 30,
      "explicit": "FALSE",
      "title": "Two Thousand and Seventeen",
      "preview": "https://p.scdn.co/mp3-preview/b34e109295596ba611adce3f29ddbc485e2ba777?cid=774b29d4f13844c495f206cafdad9c86",
      "service": "Spotify"
    },
    {
      "artist": "Bonobo",
      "album": "Late Night Tales: Bonobo",
      // "duration": 303,
      "duration": 30,
      "explicit": "FALSE",
      "title": "Places",
      "preview": "https://p.scdn.co/mp3-preview/cbacc122ce2338fa001d0a740a3b29bca7b2b467?cid=774b29d4f13844c495f206cafdad9c86",
      "service": "Spotify"
    },
    {
      "artist": "Philanthrope",
      "album": "Clockwork",
      // "duration": 138,
      "duration": 30,
      "explicit": "FALSE",
      "title": "Clockwork (feat. Tusken.)",
      "preview": "https://p.scdn.co/mp3-preview/904fffa17e00e8aecaf88549ffefac6a4009bf34?cid=774b29d4f13844c495f206cafdad9c86",
      "service": "Spotify"
    },
    {
      "artist": "Lapalux",
      "album": "Lustmore",
      // "duration": 349,
      "duration": 30,
      "explicit": "FALSE",
      "title": "Don't Mean a Thing",
      "preview": "https://p.scdn.co/mp3-preview/99c2314972748492adbe4d7cd40560273216d068?cid=774b29d4f13844c495f206cafdad9c86",
      "service": "Spotify"
    },
    {
      "artist": "Teebs",
      "album": "Ardour",
      // "duration": 155,
      "duration": 30,
      "explicit": "FALSE",
      "title": "Bern Rhythm",
      "preview": "https://p.scdn.co/mp3-preview/52b57aa5af91e4692d4c7ac206e1ea400f7c2bee?cid=774b29d4f13844c495f206cafdad9c86",
      "service": "Spotify"
    }
  ],
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
