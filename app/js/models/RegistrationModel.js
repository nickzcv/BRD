app.models.RegistrationModel = Backbone.Model.extend({

  urlRoot: 'api/user/',

  defaults: {
    email: null,
    password: null,
    repassword: null
  }


});