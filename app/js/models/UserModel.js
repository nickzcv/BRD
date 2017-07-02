app.models.UserModel = Backbone.Model.extend({

  urlRoot: 'api/user/',

  idAttribute: '_id',

  defaults: {
    email: null,
    password: null
  },

  initialize: function() {
    //console.log('initialize UserModel');

  },
});