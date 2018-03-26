app.models.AdModel = Backbone.Model.extend({

  urlRoot: function() {
    let id = this.get('idAd');
    return `api/ad/${id}`;
  },

  initialize: function() {

  },


});
