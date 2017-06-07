app.views.RegistrationView = app.views.HeaderView.extend({

  template: tpl.templates.registration,

  ui: {
    registrationModal: '#registration',
    email: '#email',
    password: '#password',
    confirmPassword: '#confirm_password'
  },

  events: {
    'hide.bs.modal' : function () {
      this.destroy();
    }
  },

  onRender: function() {
    this.ui.registrationModal.modal('show');
    this.formAddValidation();
  },

  /*
   * Validation rules for the Registration form.
   *
   */
  formAddValidation: function() {
    var currentView = this,
        $form = currentView.$el.find('#registration-form');

    $form.validate({
      /*
      rules: {
        email: {
          required: true,
          email: true,
          maxlength: 120,
          minlength: 4
        },
        password: {
          required: true,
          maxlength: 120,
          minlength: 5
        },
        confirm_password: {
          required: true,
          equalTo: '#password',
          maxlength: 120,
          minlength: 5
        },
        confirm: {
          required: true
        }
      },
      messages: {
        email: {
          required: 'Введите e-mail',
          email: 'Проверьте правильность ввода e-mail',
          maxlength: 'E-mail слишком длинный',
          minlength: 'E-mail слишком короткий'
        },
        password: {
          required: 'Введите пароль',
          maxlength: 'Пароль слишком длинный',
          minlength: 'Пароль слишком короткий'
        },
        confirm_password: {
          required: 'Введите пароль еще раз',
          equalTo: 'Пароль не совпадает с введеным выше значением',
          maxlength: 'Пароль слишком длинный',
          minlength: 'Пароль слишком короткий'
        },
        confirm: {
          required: 'Ознакомьтесь с правилами'
        }
      },
      */

      submitHandler: function() {
        currentView.handleSubmitClick();
      }
    });
  },

  modelEvents: {
    'change:loader': function() {
      console.log('attribute was changed');
    }
  },

  /*
   * Send form
   *
   */
  handleSubmitClick: function() {
    event.preventDefault();
    var thisView = this;
    console.log( thisView.model.get('loader') );
    thisView.model.set({loader: true});
    console.log( thisView.model.get('loader') );

    // TODO: check if email exist before set
    thisView.model.set({
      email: thisView.ui.email.val(),
      password: thisView.ui.password.val(),
      confirmPassword: thisView.ui.confirmPassword.val()
    });
/*
    thisView.model.save(null, {
      success: function() {
        console.log('success')
      },
      error: function() {
        console.log('error')
      }
    });
    */
  }


});