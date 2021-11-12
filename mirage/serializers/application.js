import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  links(resource) {
    let { id, modelName } = resource;
    if (modelName === 'band') {
      return {
        songs: {
          related: `/bands/${id}/songs`,
          self: `/bands/${id}/relationships/songs`,
        },
      };
    }
  },
});
