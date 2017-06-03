app.views.RegistrationView = app.views.HeaderView.extend({

  template: tpl.templates.registration,

  ui: {
    registrationModal: '#registration',
    email: '#email',
    password: '#password',
    repassword: '#repassword',
    button: 'button'
  },

  events: {
    'hide.bs.modal' : function () {
      this.destroy();
    },
    'click @ui.button': 'send'
  },

  onRender: function() {
    this.ui.registrationModal.modal('show');
  },

  send: function(e) {
    var thisView = this;

    thisView.model.set({
      email: thisView.ui.email.val(),
      password: thisView.ui.password.val(),
      repassword: thisView.ui.repassword.val()
    });

    thisView.model.save({
      success: function() {
        console.log('success')
      },
      fail: function() {
        console.log('fail')
      }
    });
  }



});