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
    this.formAddValidation();
    console.log('onRender');

  },

  formAddValidation: function() {
    console.log('app.views.formAddLearnValidation');
    console.log($('#registration-form'));
    var currentView = this;
    $('#registration-form').validate({
      rules: {
        email: {
          required: true,
          minlength: 2
        },
        password: {
          maxlength: 1000
        }
      },
      messages: {
        eventName: {
          required: "Enter an event name",
          minlength: "Enter an event name"
        },
        comments: {
          maxlength: "Comments may not exceed 1000 characters",
        }
      },

      submitHandler: function() {
        currentView.handleSubmitClick();
      }
    });
  },

  handleSubmitClick: function() {
    console.log('handleSubmitClick');
  },

  /*
  * Send form
  */
  send: function() {
    var thisView = this;

    thisView.model.set({
      email: thisView.ui.email.val(),
      password: thisView.ui.password.val(),
      repassword: thisView.ui.repassword.val()
    });

/*    thisView.model.save({
      success: function() {
        console.log('success')
      },
      fail: function() {
        console.log('fail')
      }
    });*/
  }



});