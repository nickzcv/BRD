app.collections.AdsCollection = Backbone.Collection.extend({

  url: 'api/ads',

  model: app.models.Ad,

  initialize: function() {

  },

});




app.models.Ad = Backbone.Model.extend({

});
