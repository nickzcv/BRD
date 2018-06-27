app.views.HeaderView = Mn.View.extend({

  template: tpl.templates.header,

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
      brd.router.navigateToRoute('home');
      window.location.reload();
    },
    'click @ui.userProfile': function () {
      brd.router.navigateToRoute('profile', 'dashboard');
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
    brd.regions.modalSection.show(new app.views.RegistrationView({
      model: new app.models.RegistrationModel()
    }));
  },

  showLoginView: function() {
    brd.regions.modalSection.show(new app.views.LoginView({
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