app.models.LoginModel = Backbone.Model.extend({

  defaults: {
    email: null,
    password: null
  },

  initialize: function() {
    // console.log('initialize Login Model');
    this.on('invalid', function(model, error){
      //console.log(error);
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
   * Login request
   *
   */
  login: function() {
    return $.ajax({
      url: 'api/login/',
      method: 'POST',
      data: {
        email: this.get('email'),
        password: this.get('password')
      }
    });
  }


});