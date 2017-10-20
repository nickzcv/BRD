app.models.AdsListModel = Backbone.Model.extend({

  defaults: {
    isLoggedIn: false
  },

  initialize: function() {
    console.log('initialize AdsListModel');
    console.log(this.attributes);

  },

});