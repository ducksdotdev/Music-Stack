import Component from '@ember/component';

export default Component.extend({
  classNames: ['music-player'],
  position: '1:32',
  length: '3:16',
  progress: 50,
  actions: {
    pickTime(e) {
      const $target = $(".progress-bar"),
        width = $target.width(),
        position = e.offsetX,
        newWidth = position / width * 100;

      console.log(newWidth);

      $target.find('.progress').css('width', newWidth + "%");
    }
  }
});
