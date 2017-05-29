app.views.HeaderView = Backbone.Marionette.View.extend({

  template: brd.templates.header,

  ui: {
    hamburger: '.hamburger',
    navigation: '.navigation',
    loginModal: '#login',
    forgotPassword: '.forgot-password',
    registrationModal: '#registration',
    forgotPasswordModal: '#forgot',
    registrationLink: '.register-link'
  },

  events: {
    'click @ui.hamburger': 'toggleMobileMenu',
    'click @ui.registrationLink': function () {
      this.ui.loginModal.modal('hide');
      this.ui.registrationModal.modal('show');
    },
    'click @ui.forgotPassword': function () {
      this.ui.loginModal.modal('hide');
      this.ui.forgotPasswordModal.modal('show');
    }
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