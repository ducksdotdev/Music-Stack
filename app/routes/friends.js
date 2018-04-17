import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      "John Doe",
      "Jane Doe",
      "Sam Smith",
      "Dan Davids",
      "Jacob Worth",
      "Max Smith",
      "Brian Long"
    ];
  }
});
