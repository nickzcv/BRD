app.views.LoginView = app.views.HeaderView.extend({

  template: tpl.templates.login,

  ui: {
    loginModal: '#login',
    loginForm: '#login-form',
    email: '#email',
    password: '#password',
    loader: '.loader-wrapper',
    danger: '.alert-danger'
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
    var thisView = this;
    thisView.ui.loginModal.modal('show');
    thisView.formAddValidation();
  },

  /*
   * Validation rules for the Login form.
   *
   */
  formAddValidation: function() {
    var thisView = this;
    thisView.ui.loginForm.validate({
      rules: {
        email: {
          required: true,
          email: true,
          maxlength: 120,
          minlength: 4
        },
        password: {
          required: true,
          maxlength: 100,
          minlength: 5
        }
      },
      messages: {
        email: {
          required: 'Введите e-mail',
          email: 'Проверьте правильность ввода e-mail',
          maxlength: jQuery.validator.format('E-mail не должен превышать {0} символов'),
          minlength: jQuery.validator.format('E-mail должен содержать минимум {0} символов')
        },
        password: {
          required: 'Введите пароль',
          maxlength: jQuery.validator.format('Пароль не должен превышать {0} символов'),
          minlength: jQuery.validator.format('Пароль должен содержать минимум {0} символов')
        }
      },

      submitHandler: function() {
        thisView.loginHandler();
      }
    });
  },

  loginHandler: function() {
    var thisView = this;
    // Show loader
    thisView.ui.loginForm.hide();
    thisView.ui.loader.show();
    thisView.model.set({
      email: thisView.ui.email.val(),
      password: thisView.ui.password.val()
    });
    // Login request to the server
    thisView.model.login().then(function(data) {
      // Destroy modal
      thisView.destroy();
      brd.controllers.hideModalFully();
      // Save token
      brd.controllers.saveToken(data.token);
      // Open setting page
      brd.router.navigate('#settings',{trigger:true});

    }, function () {
      thisView.ui.loader.hide();
      thisView.ui.loginForm.fadeIn();
      thisView.ui.danger.html('Ошибка! Неверный email или пароль.').fadeIn();
    });
  },

  showForgotView: function() {
    // this.showChildView('modalSection', new app.views.ForgotView());
  }

});