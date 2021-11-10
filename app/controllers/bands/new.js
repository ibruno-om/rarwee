import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Band from '../../models/band';
import { inject as service } from '@ember/service';

export default class BandsNewController extends Controller {
  @service catalog;
  @service router;

  @tracked name;

  @action
  updateName(event) {
    this.name = event.target.value;
  }

  @action
  async saveBand() {
    let response = await fetch('/bands', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/vnd.api+json',
      },
      body: JSON.stringify({
        data: {
          type: 'bands',
          attributes: {
            name: this.name,
          },
        },
      }),
    });

    let json = await response.json();
    let { id, attributes } = json.data;
    let record = new Band({ id, ...attributes });
    this.catalog.add('band', record);
    this.router.transitionTo('bands.band.songs', id);
  }
}
