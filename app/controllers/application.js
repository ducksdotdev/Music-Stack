import Controller from '@ember/controller';
import {inject} from '@ember/service';

export default Controller.extend({
  session: inject,
  init() {
    let routeName = this.get('currentRouteName');
    console.log(routeName);
  }
});
