import Component from '@ember/component';

export default Component.extend({
  classNames: ['music-player'],
  length: 196,
  progress: 92,
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
