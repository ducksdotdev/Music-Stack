import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  classNames: ['song-item'],
  positionalParams: 'song',
  playing: service(),
  doubleClick() {
    this.get('playing').setSong(this.get('song'));
  }
});
