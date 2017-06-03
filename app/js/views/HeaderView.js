app.views.HeaderView = Backbone.Marionette.View.extend({

  template: tpl.templates.header,

  regions: {
    modalSection: '.modal-section'
  },

  ui: {
    hamburger: '.hamburger',
    navigation: '.navigation',
    registrationBtn: '.registration',
    loginBtn: '.login'
  },

  events: {
    'click @ui.hamburger': 'toggleMobileMenu',
    'click @ui.registrationBtn': 'showRegistrationView',
    'click @ui.loginBtn': 'showLoginView'
  },

  showRegistrationView: function () {
    this.showChildView('modalSection', new app.views.RegistrationView({
      model: new app.models.RegistrationModel
    }));
  },

  showLoginView: function () {
    this.showChildView('modalSection', new app.views.LoginView({
      model: new app.models.MainModel
    }));
  },

  /*
   * Mobile navigation handler (hamburger)
   *
   */
  toggleMobileMenu: function () {
    this.ui.hamburger.toggleClass('closeBtn');
    this.ui.navigation.toggleClass('hidden');
  }


});