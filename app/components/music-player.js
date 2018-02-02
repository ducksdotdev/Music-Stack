import Component from '@ember/component';

export default Component.extend({
  classNames: ['music-player'],
  position: '1:32',
  length: '3:16',
  progress: 50,
  didRender() {
    let __self = this;
    __self._super(...arguments);
    const length = __self.get('length').split(":"),
      position = __self.get('position').split(":"),
      totalTime = (length[0] * 60) + parseInt(length[1]),
      curTime = (position[0] * 60) + parseInt(position[1]),
      time = (curTime / totalTime * 100);
    $('.progress-bar .progress').css('width', time + "%");
  },
  actions: {
    pickTime(e) {
      const $target = $(".progress-bar"),
        width = $target.width(),
        position = e.offsetX,
        newWidth = position / width * 100;
      $target.find('.progress').css('width', newWidth + "%");
    }
  }
});
