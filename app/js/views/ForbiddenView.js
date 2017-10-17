app.views.ForbiddenView = Backbone.Marionette.View.extend({

  template: tpl.templates.forbidden,

  regions: {
    modalSection: '.modal-section'
  },

  ui: {
    'login': '.login',
    'register': '.register',
  },

  events: {
    'click @ui.login': 'showLoginView',
    'click @ui.register': 'showRegistrationView',
  },

  showLoginView: function() {
    this.showChildView('modalSection', new app.views.LoginView({
      model: new app.models.LoginModel()
    }));
  },

  showRegistrationView: function() {
    this.showChildView('modalSection', new app.views.RegistrationView({
      model: new app.models.RegistrationModel()
    }));
  },

});