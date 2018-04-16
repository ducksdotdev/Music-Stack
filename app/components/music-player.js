import Component from '@ember/component';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';
import {htmlSafe} from '@ember/string';
import $ from 'jquery';

export default Component.extend({
  playing: service(),
  classNames: ['music-player'],
  actions: {
    pausePlay() {
      this.get('playing').pausePlay()
    },
    goNext() {
      this.get('playing').goNext()
    },
    goPrevious() {
      this.get('playing').goPrevious()
    },
    pickTime(e) {
      const width = $(".progress-bar").width(),
        position = e.offsetX,
        percentThrough = position / width * 100;
      this.get('playing').pickTime(percentThrough);
    }
  },
  width: computed('playing.{progress,song.duration}', function () {
    let width = 0;
    let duration = this.get('playing.song.duration');
    if (duration > 0)
      width = this.get('playing.progress') / duration * 100;
    return htmlSafe("width: " + width + "%");
  })
});
