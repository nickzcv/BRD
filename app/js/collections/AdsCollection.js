app.collections.AdsCollection = Backbone.Collection.extend({

  url: 'api/ads',

  comparator: function(m) {
    return -Date.parse(m.get('updated_at'));
  },

});