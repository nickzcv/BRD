app.models.HomeContentModel = Backbone.Model.extend({

  defaults: {
    loading: true
  },

  initialize: function() {
    console.log('++ HomeContentModel');
    console.log(this.attributes);

  },

});