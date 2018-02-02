import Component from '@ember/component';

export default Component.extend({
  classNames: ['music-player'],
  length: 196,
  progress: 0,
  interval: null,
  init() {
    let __self = this;
    __self._super(...arguments);
    __self.set('interval', setInterval(function () {
      let progress = __self.get('progress');
      if (progress >= __self.get('length')) clearInterval(__self.get('interval'));
      __self.set('progress', progress + .25);
    }, 250));
  },
  willDestroyElement() {
    clearInterval(this.get('interval'));
  },
  actions: {
    pickTime(e) {
      const $target = $(".progress-bar"),
        width = $target.width(),
        position = e.offsetX,
        percentThrough = position / width * 100;
      this.set('progress', this.get('length') * percentThrough / 100);
    }
  },
  setProgress: function () {
    const width = this.get('progress') / this.get('length') * 100;
    $('.progress-bar .progress').css('width', width + "%");
  }.observes('progress').on('didRender')
});
