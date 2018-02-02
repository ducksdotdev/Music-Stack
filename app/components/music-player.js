import Component from '@ember/component';

export default Component.extend({
  classNames: ['music-player'],
  length: Math.random() * (359 - 140) + 140,
  progress: 0,
  interval: null,
  paused: false,
  willDestroyElement() {
    clearInterval(this.get('interval'));
  },
  startProgress() {
    const __self = this;
    if (!__self.get('interval')) {
      __self.set('interval', setInterval(function () {
        let progress = __self.get('progress');
        if (progress >= __self.get('length')) clearInterval(__self.get('interval'));
        __self.set('progress', progress + .25);
      }, 250));
    }
  },
  togglePausePlay: function () {
    const $target = $('.button.pauseplay'),
      $pause = $target.find(".fa-pause"),
      $play = $target.find(".fa-play");
    if (this.get("paused")) {
      $pause.hide();
      $play.show();
      clearInterval(this.get('interval'));
      this.set('interval', null);
    } else {
      $pause.show();
      $play.hide();
      this.startProgress();
    }
  }.observes('paused').on('didRender'),
  setProgress: function () {
    const width = this.get('progress') / this.get('length') * 100;
    $('.progress-bar .progress').css('width', width + "%");
  }.observes('progress').on('didRender'),
  actions: {
    pickTime(e) {
      const $target = $(".progress-bar"),
        width = $target.width(),
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
});
