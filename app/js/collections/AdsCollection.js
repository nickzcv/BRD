app.collections.AdsCollection = Backbone.Collection.extend({

  url: function() {
    return 'api/ads/' + brd.controllers.getUserId();
  },

  comparator: function(m) {
    return -Date.parse(m.get('updated_at'));
  },

});