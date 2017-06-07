app.models.RegistrationModel = Backbone.Model.extend({

  urlRoot: 'api/users',

  defaults: {
    email: null,
    password: null,
    confirmPassword: null
  },

  initialize: function() {
    console.log('initialize RegistrationModel');
    this.on('invalid', function(model, error){
      console.log(error);
    });
  },

  validate: function(attributes) {
    if (!attributes.email) {
      return 'empty email.';
    }
    if (!attributes.password) {
      return 'empty password.';
    }
  },

  /*
  * Check by email if user exist
  *
  */
  isEmailExist: function(email) {
    return $.ajax({
      url: 'api/user-email-check/',
      data: {
        email: email
      }
    });
  }


});