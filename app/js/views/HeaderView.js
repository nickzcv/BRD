app.views.HeaderView = Backbone.Marionette.View.extend({

  template: brd.templates.header,

  ui: {
    hamburger: '.hamburger',
    navigation: '.navigation',
    loginModal: '#login',
    registrationModal: '#registration',
    registrationLink: '.register-link'
  },

  events: {
    'click @ui.hamburger': 'toggleMobileMenu',
    'click @ui.registrationLink': 'switchModal'
  },

  /*
   * Mobile navigation handler (hamburger)
   *
   */
  toggleMobileMenu: function () {
    this.ui.hamburger.toggleClass('closeBtn');
    this.ui.navigation.toggleClass('hidden');
  },

  /*
   * Switch from login to registration modal dialog
   *
   */
  switchModal: function () {
    this.ui.loginModal.modal('hide');
    this.ui.registrationModal.modal('show');
  }

});