// app/routes/bands/band/songs.js
import Route from '@ember/routing/route';

export default class BandsBandSongsRoute extends Route {
  resetController(controller) {
    controller.title = '';
    controller.showAddSong = true;
  }
}
