app.views.LoginView = app.views.HeaderView.extend({

  template: tpl.templates.login,

  ui: {
    loginModal: '#login',
    loginButton: '.login-btn'
  },

  events: {
    'click @ui.loginButton' : 'loginHandler',
    'hide.bs.modal' : function () {
      this.destroy();
    },
    'click .forgot-password' : function () {
      this.ui.loginModal.modal('hide');
      this.destroy();
      this.showForgotView();
    }
  },

  onRender: function() {
    this.ui.loginModal.modal('show');
  },

  loginHandler: function() {
    brd.router.navigate('#settings',{trigger:true});
    brd.controllers.hideModalBack();
  },

  showForgotView: function() {
    // this.showChildView('modalSection', new app.views.ForgotView());
  }

});