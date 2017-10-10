app.models.AdsListModel = Backbone.Model.extend({

  defaults: {
    loading: true,
    noAds: true,
  },

  initialize: function() {
    console.log('initialize AdsListModel')
  },

});