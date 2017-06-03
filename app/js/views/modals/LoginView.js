app.views.LoginView = app.views.HeaderView.extend({

  template: tpl.templates.login,

  ui: {
    loginModal: '#login'
  },

  events: {
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

  showForgotView: function () {
    // this.showChildView('modalSection', new app.views.ForgotView());
  }

});