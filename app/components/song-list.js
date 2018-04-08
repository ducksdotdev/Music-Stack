import Component from '@ember/component';

export default Component.extend({
  classNames: ['song-list'],
  positionalParams: ['songs'],
  songs() {
    return this.get('store').findAll('songs');
  }
});
