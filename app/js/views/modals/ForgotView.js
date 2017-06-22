app.views.ForgotView = app.views.HeaderView.extend({

  template: tpl.templates.forgot,

  ui: {
    forgotPasswordModal: '#forgot'
  },

  events: {

  },

  onRender: function() {
    //console.log('onRender forgotPasswordModal');
    //this.ui.forgotPasswordModal.modal('show');
  }

});