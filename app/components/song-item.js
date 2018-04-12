import Component from '@ember/component';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';

export default Component.extend({
  classNames: ['song-item'],
  positionalParams: 'song',
  playing: service(),
  isActive: computed('playing.song.title', 'song.title', function () {
    return this.get('playing.song.title') === this.get('song.title');
  }),
  doubleClick() {
    this.get('playing').setSong(this.get('song'));
  }
});
