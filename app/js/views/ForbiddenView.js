app.views.ForbiddenView = Mn.View.extend({

  template: tpl.templates.forbidden,

  ui: {
    'login': '.login',
    'register': '.register',
  },

  events: {
    'click @ui.login': 'showLoginView',
    'click @ui.register': 'showRegistrationView',
  },

  showRegistrationView: function() {
    brd.regions.modalSection.show(new app.views.RegistrationView({
      model: new app.models.RegistrationModel()
    }));
  },

  showLoginView: function() {
    brd.regions.modalSection.show(new app.views.LoginView({
      model: new app.models.LoginModel()
    }));
  }

});