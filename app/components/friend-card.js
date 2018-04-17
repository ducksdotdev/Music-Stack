import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  playing: service(),
  classNames: 'friend',
  positionalParams: 'friend',
  song: [],
  init() {
    const __self = this;
    __self._super(...arguments);
    const listeningTo = __self.get('friend.listeningTo');
    if (listeningTo && __self.get('playing')) {
      __self.set('song', __self.get('playing').playlist[listeningTo])
    }
  },
  actions: {
    setSong() {
      this.get('playing').setSong(this.get('friend.listeningTo'));
    }
  }
});
