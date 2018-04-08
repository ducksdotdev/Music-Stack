import Component from '@ember/component';

export default Component.extend({
  // session: Ember.inject.service('session'),
  classNames: ['music-player'],
  length: Math.random() * (359 - 140) + 140,
  progress: 0,
  interval: null,
  paused: true,
  width: 0,
  willDestroyElement() {
    clearInterval(this.get('interval'));
  },
  startProgress() {
    const __self = this;
    if (!__self.get('interval')) {
      __self.set('interval', setInterval(function () {
        let progress = __self.get('progress');
        if (progress >= __self.get('length')) __self.send('goNext');
        else __self.set('progress', progress + .25);
      }, 250));
    }
  },
  togglePausePlay: function () {
    if (this.get("paused")) {
      clearInterval(this.get('interval'));
      this.set('interval', null);
    } else {
      this.startProgress();
    }
  }.observes('paused').on('didRender'),
  setProgress: function () {
    const width = this.get('progress') / this.get('length') * 100;
    this.set('width', width);
  }.observes('progress').on('didRender'),
  actions: {
    pickTime(e) {
      const width = $(".progress-bar").width(),
        position = e.offsetX,
        percentThrough = position / width * 100;
      this.set('progress', this.get('length') * percentThrough / 100);
    },
    pausePlay() {
      this.set('paused', !this.get('paused'))
    },
    goNext() {
      this.set('progress', 0);
      this.set('length', Math.random() * (359 - 140) + 140)
    },
    goPrevious() {
      this.set('progress', 0);
    }
  },
  widthString: function() {
    return Ember.String.htmlSafe("width: " + this.get('width') + "%");
  }.property('width')
});
