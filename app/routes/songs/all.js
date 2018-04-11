import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        title: '14400 Minutes',
        artist: 'Chance the Rapper',
        album: '10DAY',
        service: 'YouTube',
        duration: 133
      },
      {
        title: "Legend Has It",
        artist: "Run The Jewels",
        album: "Run The Jewels 3",
        service: "Spotify",
        duration: 206
      },
      {
        service: "YouTube",
        title: "Steve Combs Through",
        duration: 38,
        artist: "Steve Combs",
        album: "Steve Combs Premium Preview EP"
      },
      {
        service: "YouTube",
        title: "Nowhere to Hide",
        duration: 154,
        artist: "Steve Combs",
        album: "Steve Combs Premium Preview EP",
      },
      {
        service: "YouTube",
        title: "Drag Chain",
        duration: 172,
        artist: "Steve Combs",
        album: "Steve Combs Premium Preview EP",
      },
      {
        service: "Spotify",
        title: "Too Much Caffeine",
        duration: 277,
        artist: "Computer Music All-stars",
        album: "Singles",
      },
      {
        title: "Squigglejammer",
        duration: 254,
        artist: "Computer Music All-stars",
        album: "Singles",
        service: "Spotify"
      },
      {
        title: "Psychout",
        duration: 110,
        artist: "Computer Music All-stars",
        album: "Singles",
        service: "Spotify"
      },
      {
        title: "Glitterhater",
        duration: 190,
        artist: "Computer Music All-stars",
        album: "Singles",
        service: "Spotify"
      },
      {
        title: "Crash",
        duration: 213,
        artist: "Computer Music All-stars",
        album: "Singles",
        service: "Spotify"
      },
      {
        title: "Clueless",
        duration: 322,
        artist: "Computer Music All-stars",
        album: "Singles",
        service: "Spotify"
      },
      {
        title: "Tiny Footsteps in the Snow",
        duration: 453,
        artist: "Bio Unit",
        service: "YouTube",
        album: "Export",
      },
      {
        title: "Tableland",
        duration: 234,
        artist: "Bio Unit",
        service: "YouTube",
        album: "Export",
      },
      {
        title: "Round & Round",
        duration: 212,
        artist: "Bio Unit",
        service: "YouTube",
        album: "Export",
      },
      {
        title: "Robot Holiday",
        duration: 260,
        artist: "Bio Unit",
        service: "YouTube",
        album: "Export",
      },
      {
        title: "Opium",
        duration: 284,
        artist: "Bio Unit",
        service: "YouTube",
        album: "Export",
      },
      {
        title: "Mount Fuji",
        duration: 192,
        artist: "Bio Unit",
        service: "YouTube",
        album: "Export",
      },
      {
        title: "Mandlebrot",
        duration: 400,
        artist: "Bio Unit",
        service: "YouTube",
        album: "Export",
      },
      {
        title: "Lonely Satellite",
        artist: "Bio Unit",
        service: "YouTube",
        duration: 321,
        album: "Export",
      }
    ]
  }
});
