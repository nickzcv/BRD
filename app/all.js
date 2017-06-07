/*******************************************************************************
 APP
 *******************************************************************************/
/**
 * Declare the application object
 *
 * @class app
 */
var app = (function() {

  var objApp = {
    collections: {},
    models: {},
    router: {},
    views: {}
  };

  objApp.init = function() {
    // console.log('app.init');
    const App = Backbone.Marionette.Application.extend({
      region: '#app',

      onBeforeStart: function(application, options) {
        this.model = new app.models.MainModel(options.data);
      },

      onStart: function(application, options) {
        this.showView(new app.views.MainView({
          model: this.model
        }));
        Backbone.history.start();
      }
    });

    const application = new App();

    application.start({
      data: {
        title: 'test!'
      }
    });
  };

  return objApp;
})();


/*****************************************
 Initialize the application
 ******************************************/
$(document).ready(function() {
  app.init();
});




app.models.MainModel = Backbone.Model.extend();
app.models.RegistrationModel = Backbone.Model.extend({

  urlRoot: 'api/users',

  defaults: {
    email: null,
    password: null,
    confirmPassword: null,
    loader: false
  },

  initialize: function() {
    console.log('initialize RegistrationModel');
    this.on('invalid', function(model, error){
      console.log(error);
    });
  },

  validate: function(attributes) {
    if (!attributes.email) {
      return 'empty email.';
    }
    if (!attributes.password) {
      return 'empty password.';
    }
  }


});
app.views.FilterView = Backbone.Marionette.View.extend({

  template: tpl.templates.filter,


});
app.views.FooterView = Backbone.Marionette.View.extend({
  template: tpl.templates.footer
});
app.views.HeaderView = Backbone.Marionette.View.extend({

  template: tpl.templates.header,

  regions: {
    modalSection: '.modal-section'
  },

  ui: {
    hamburger: '.hamburger',
    navigation: '.navigation',
    registrationBtn: '.registration',
    loginBtn: '.login'
  },

  events: {
    'click @ui.hamburger': 'toggleMobileMenu',
    'click @ui.registrationBtn': 'showRegistrationView',
    'click @ui.loginBtn': 'showLoginView'
  },

  showRegistrationView: function () {
    this.showChildView('modalSection', new app.views.RegistrationView({
      model: new app.models.RegistrationModel
    }));
  },

  showLoginView: function () {
    this.showChildView('modalSection', new app.views.LoginView({
      model: new app.models.MainModel
    }));
  },

  /*
   * Mobile navigation handler (hamburger)
   *
   */
  toggleMobileMenu: function () {
    this.ui.hamburger.toggleClass('closeBtn');
    this.ui.navigation.toggleClass('hidden');
  }


});
app.views.MainView = Backbone.Marionette.View.extend({

  template: tpl.templates.main,

  regions: {
    header: 'header',
    filter: '.filter',
    footer: 'footer'
  },

  ui: {
    mobileFilterBtn: '.mobile-filter-btn .btn',
    closeFilter: 'a.close-btn'
  },

  events: {
    'click @ui.mobileFilterBtn': function () {
      $('.filters').toggleClass('visible');
    },
    'click @ui.closeFilter': function () {
      $('.filters').removeClass('visible');
    }
  },

  onRender: function() {
    var thisView = this;
    thisView.showChildView('header', new app.views.HeaderView());
    thisView.showChildView('filter', new app.views.FilterView());
    thisView.showChildView('footer', new app.views.FooterView());
  }

});
app.views.ForgotView = app.views.HeaderView.extend({

  template: tpl.templates.forgot,

  ui: {
    forgotPasswordModal: '#forgot'
  },

  events: {

  },

  onRender: function() {
    console.log('onRender forgotPasswordModal');
    this.ui.forgotPasswordModal.modal('show');
  }

});
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