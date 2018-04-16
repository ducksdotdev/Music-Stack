import Component from '@ember/component';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';

export default Component.extend({
  classNames: ['song-item'],
  positionalParams: ['playlist', 'index'],
  playing: service(),
  isActive: computed('playing.song.title', 'song.title', function () {
    return this.get('playing.song.title') === this.get('song.title');
  }),
  doubleClick() {
    let playing = this.get('playing');
    playing.setPlaylist(this.get('playlist'));
    playing.setSong(this.get('index'));
  }
});
