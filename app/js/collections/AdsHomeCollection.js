app.collections.AdsHomeCollection = Backbone.Collection.extend({

  url: function() {
    return 'api/ads';
  },

  comparator: function(m) {
    return -Date.parse(m.get('updated_at'));
  },

});