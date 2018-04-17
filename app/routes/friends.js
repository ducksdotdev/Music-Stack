import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        name: "John Doe",
        listeningTo: 1
      },
      {
        name: "Jane Doe",
      },
      {
        name: "Sam Smith",
        listeningTo: 2
      },
      {
        name: "Dan Davids",
      },
      {
        name: "Jacob Worth"
      },
      {
        name: "Max Smith"
      },
      {
        name: "Frank Govan",
        listeningTo: 3
      }
    ]
  },
});
