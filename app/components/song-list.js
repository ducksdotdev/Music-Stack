import Component from '@ember/component';

export default Component.extend({
  classNames: ['song-list'],
  positionalParams: 'songs',
  sortedSongs: null,
  sortDir: 1,
  sortBy: null,
  init() {
    this._super(...arguments);
    this.set('sortedSongs', this.get('songs'));
  },
  actions: {
    sort(sortBy) {
      const direction = this.get('sortDir');
      const newOrder = this.get('songs').sort(function (a, b) {
        a = a[sortBy].toString().toLowerCase(), b = b[sortBy].toString().toLowerCase();
        if (a < b) return direction === 1 ? -1 : 1;
        else if (a > b) return direction === 1 ? 1 : -1;
        return 0;
      });

      if (direction === 1) this.set('sortDir', 0);
      else this.set('sortDir', 1);

      this.set('sortBy', sortBy);
      this.set('sortedSongs', null);
      this.set('sortedSongs', newOrder);
    }
  }
});