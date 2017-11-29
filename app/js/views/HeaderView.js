app.views.HeaderView = Backbone.Marionette.View.extend({

  template: tpl.templates.header,

  regions: {
    modalSection: '.modal-section'
  },

  ui: {
    hamburger: '.hamburger',
    navigation: '.navigation',
    registrationBtn: '.registration',
    loginBtn: '.login',
    logout: '.logout',
    userProfile: '.user-profile'
  },

  events: {
    'click @ui.hamburger': 'toggleMobileMenu',
    'click @ui.registrationBtn': 'showRegistrationView',
    'click @ui.loginBtn': 'showLoginView',
    'click @ui.logout': function () {
      brd.controllers.logout();
      app.user = null;
      brd.router.navigate('#', {trigger:true});
    },
    'click @ui.userProfile': function () {
      brd.router.navigate('#dashboard', {trigger:true});
    }
  },

  initialize: function() {
    let thisView = this;
    thisView.listenTo(app.user, 'change', () => {
      thisView.model.updateUser();
      thisView.render();
    });
  },

  showRegistrationView: function() {
    this.showChildView('modalSection', new app.views.RegistrationView({
      model: new app.models.RegistrationModel()
    }));
  },

  showLoginView: function() {
    this.showChildView('modalSection', new app.views.LoginView({
      model: new app.models.LoginModel()
    }));
  },

  /*
   * Mobile navigation handler (hamburger)
   *
   */
  toggleMobileMenu: function() {
    this.ui.hamburger.toggleClass('closeBtn');
    this.ui.navigation.toggleClass('hidden');
  }


});