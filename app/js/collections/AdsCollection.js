app.collections.AdsCollection = Backbone.Collection.extend({

  url: 'api/ads',

  //model: app.models.Ad,

  comparator: function(m) {
    return -Date.parse(m.get('updated_at'));
  },

  initialize: function() {
    console.log(this)
  },

});