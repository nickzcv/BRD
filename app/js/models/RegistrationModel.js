app.models.RegistrationModel = Backbone.Model.extend({

  urlRoot: 'api/users',

  defaults: {
    email: null,
    password: null,
    confirmPassword: null
  },

  validate: function(attrs) {
    // console.log(attrs);

    if (!attrs.email) {
      return 'Need email';
    }


  }


});