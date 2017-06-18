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
        brd.model = new app.models.MainModel(options.data);
        brd.router = new app.router();

        console.log(brd.controllers.isLoggedIn());
      },

      onStart: function(application, options) {
        // Save main region namespace
        brd.regions.mainRegion = this.getRegion();

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




var brd = {

  model: {},
  router: {},
  regions: {},
  controllers: {
    /*
     * Fully hide modal window
     *
     */
    hideModalFully: function () {
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
    },

    /*
     * Save token in localStorage
     *
     */
    saveToken: function (token) {
      localStorage.setItem('token', token);
    },

    /*
     * Get token from localStorage
     *
     */
    getToken: function () {
      return localStorage.getItem('token');
    },

    /*
     * Remove token from localStorage
     *
     */
    logout: function () {
      localStorage.removeItem('token');
    },

    /*
     * Check token validity
     *
     */
    isLoggedIn: function() {
      var token = this.getToken();
      var payload;

      if(token){
        payload = token.split('.')[1];
        payload = atob(payload);
        payload = JSON.parse(payload);

        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    }

  }

};
app.router = Marionette.AppRouter.extend({

  routes: {
    '': 'showMainPage',
    'dashboard': 'showDashboardPage',
    'settings': 'showSettingsPage'
  },

  initialize: function() {

  },

  showMainPage: function() {
    console.log('router - showMainPage');
    brd.regions.mainRegion.show(new app.views.MainView());
    brd.regions.bodyRegion.show(new app.views.HomeView());
  },

  showDashboardPage: function() {
    console.log('router - showDashboardPage');
    brd.regions.mainRegion.show(new app.views.MainView());
    brd.regions.bodyRegion.show(new app.views.DashboardView());
    brd.regions.leftNavRegion.show(new app.views.LeftNavigation({page: 'dashboard'}));
  },

  showSettingsPage: function() {
    console.log('router - showSettingsPage');
    brd.regions.mainRegion.show(new app.views.MainView());
    brd.regions.bodyRegion.show(new app.views.SettingsView());
    brd.regions.leftNavRegion.show(new app.views.LeftNavigation({page: 'settings'}));
  }



});

// Profile left navigation
// Handlebars.registerPartial('leftNavigation', tpl.templates.left_navigation);



/**
 * Compare two values
 *
 * @param {Number} lvalue Left value to compare
 * @param {String} operator Operator to apply while comparing
 * @param {Number} rvalue Right value to compare
 * @param {Object} options
 * @property {Function} options.fn
 * @property {Function} options.inverse
 *
 * @todo Clarify parameters' types and descriptions.
 * @function external:HandlebarsHelper#compare
 */
/* jshint ignore:start */
/* eslint-disable */
Handlebars.registerHelper('compare', function(lvalue, operator, rvalue, options) {
  var operators, result;
  if (arguments.length < 3) {
    throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
  }
  if (options === undefined) {
    options = rvalue;
    rvalue = operator;
    operator = "===";
  }
  operators = {
    '==': function(l, r) {
      return l == r; },
    '===': function(l, r) {
      return l === r; },
    '!=': function(l, r) {
      return l != r; },
    '!==': function(l, r) {
      return l !== r; },
    '<': function(l, r) {
      return l < r; },
    '>': function(l, r) {
      return l > r; },
    '<=': function(l, r) {
      return l <= r; },
    '>=': function(l, r) {
      return l >= r; },
    'typeof': function(l, r) {
      return typeof l == r; }
  };
  if (!operators[operator]) {
    throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);
  }
  result = operators[operator](lvalue, rvalue);
  if (result) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
app.models.LoginModel = Backbone.Model.extend({

  urlRoot: 'api/login',

  defaults: {
    email: null,
    password: null
  },

  initialize: function() {
    // console.log('initialize Login Model');
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
  },

  /*
   * Login request
   *
   */
  login: function() {
    return $.ajax({
      url: 'api/login/',
      method: 'POST',
      data: {
        email: this.get('email'),
        password: this.get('password')
      }
    });
  }


});
app.models.MainModel = Backbone.Model.extend();
app.models.RegistrationModel = Backbone.Model.extend({

  urlRoot: 'api/users',

  defaults: {
    email: null,
    password: null,
    confirmPassword: null
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
  },

  /*
  * Check by email if user exist
  *
  */
  isEmailExist: function(email) {
    return $.ajax({
      url: 'api/user-email-check/',
      data: {
        email: email
      }
    });
  }


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
    loginBtn: '.login',
    homeLink: '.home-link'
  },

  events: {
    'click @ui.hamburger': 'toggleMobileMenu',
    'click @ui.registrationBtn': 'showRegistrationView',
    'click @ui.loginBtn': 'showLoginView',
    'click @ui.homeLink': function () {
      brd.router.navigate('#', {trigger:true});
    }
  },

  showRegistrationView: function() {
    this.showChildView('modalSection', new app.views.RegistrationView({
      model: new app.models.RegistrationModel
    }));
  },

  showLoginView: function() {
    this.showChildView('modalSection', new app.views.LoginView({
      model: new app.models.LoginModel
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
app.views.MainView = Backbone.Marionette.View.extend({

  template: tpl.templates.main,

  regions: {
    headerRegion: 'header',
    bodyRegion: '.content',
    footerRegion: 'footer'
  },

  initialize: function() {
    // Initialize main content region
    brd.regions.bodyRegion = this.getRegion('bodyRegion');
  },

  onRender: function() {
    var thisView = this;
    thisView.showChildView('headerRegion', new app.views.HeaderView());
    thisView.showChildView('footerRegion', new app.views.FooterView());
  }

});
app.views.SettingsAccountSectionView = Backbone.Marionette.View.extend({

  template: tpl.templates.settings_account_section,

  regions: {

  },

  initialize: function() {

  },

  onRender: function() {
    console.log('++ SettingsAccountSectionView onRender')
  }


});
app.views.SettingsProfileSectionView = Backbone.Marionette.View.extend({

  template: tpl.templates.settings_profile_section,

  regions: {

  },

  initialize: function() {

  },

  onRender: function() {
    console.log('-- SettingsProfileSectionView onRender')
  }


});
app.views.FilterView = Backbone.Marionette.View.extend({

  template: tpl.templates.filter,


});
app.views.HomeView = Backbone.Marionette.View.extend({

  template: tpl.templates.home,

  regions: {
    filter: '.filter',
    adsFilter: '.content-filter',
    adsList: '.ads-list'
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
    thisView.showChildView('filter', new app.views.FilterView());
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
app.views.RegistrationView = app.views.HeaderView.extend({

  template: tpl.templates.registration,

  ui: {
    registrationModal: '#registration',
    email: '#email',
    password: '#password',
    confirmPassword: '#confirm_password',
    form: '#registration-form',
    loader: '.loader-wrapper',
    danger: '.alert-danger',
    success: '.alert-success',
    checkmark: '.checkmark'
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
    var thisView = this;
    thisView.ui.form.validate({
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
        },
        confirm_password: {
          required: true,
          equalTo: '#password',
          maxlength: 100,
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
          maxlength: jQuery.validator.format('E-mail не должен превышать {0} символов'),
          minlength: jQuery.validator.format('E-mail должен содержать минимум {0} символов')
        },
        password: {
          required: 'Введите пароль',
          maxlength: jQuery.validator.format('Пароль не должен превышать {0} символов'),
          minlength: jQuery.validator.format('Пароль должен содержать минимум {0} символов')
        },
        confirm_password: {
          required: 'Введите пароль еще раз',
          equalTo: 'Пароль не совпадает с введеным выше значением',
          maxlength: jQuery.validator.format('Пароль не должен превышать {0} символов'),
          minlength: jQuery.validator.format('Пароль должен содержать минимум {0} символов')
        },
        confirm: {
          required: 'Ознакомьтесь с правилами'
        }
      },

      submitHandler: function() {
        thisView.handleSubmitClick();
      }
    });
  },

  /*
   * Check form data before save
   *
   */
  handleSubmitClick: function() {
    var thisView = this;
    // Show loader
    thisView.ui.form.hide();
    thisView.ui.loader.show();
    // Check if email already exist
    thisView.model.isEmailExist(thisView.ui.email.val()).then(function(data) {
      if (data.exist) {
        thisView.ui.loader.hide();
        thisView.ui.form.fadeIn();
        thisView.ui.danger.html('E-mail занят.').fadeIn();
      } else {
        thisView.saveUser();
      }
    }, function (error) {
      thisView.ui.loader.hide();
      thisView.ui.form.fadeIn();
      thisView.ui.danger.html('Ошибка! Поробуйте еще раз чуть позже.').fadeIn();
    });

  },

  /*
   * Save user
   *
   */
  saveUser: function() {
    var thisView = this;

    thisView.model.set({
      email: thisView.ui.email.val(),
      password: thisView.ui.password.val(),
      confirmPassword: thisView.ui.confirmPassword.val()
    });

    thisView.model.save(null, {
      success: function() {
        thisView.ui.loader.hide();
        thisView.ui.danger.hide();
        thisView.ui.success.html('Для завершения регистрации пройдите по ссылке в письме.').fadeIn();
        thisView.ui.checkmark.fadeIn(1000);
      },
      error: function() {
        thisView.ui.loader.hide();
        thisView.ui.danger.html('Ошибка! Поробуйте еще раз чуть позже.').fadeIn();
        thisView.ui.form.fadeIn();
      }
    });
  }


});
app.views.DashboardView = Backbone.Marionette.View.extend({

  template: tpl.templates.dashboard,

  regions: {
    leftNavRegion: '.left-navigation'
  },

  ui: {

  },

  events: {

  },

  initialize: function() {
    // Initialize left navigation region
    brd.regions.leftNavRegion = this.getRegion('leftNavRegion');
  }


});
app.views.LeftNavigation = Backbone.Marionette.View.extend({

  template: tpl.templates.left_navigation,

  ui: {
    dashboard: '.dashboard',
    ads: '.ads',
    companies: '.companies',
    messages: '.messages',
    favorite: '.favorite',
    settings: '.settings'
  },

  events: {
    'click @ui.dashboard': function () {
      brd.router.navigate('#dashboard', {trigger:true});
    },
    'click @ui.settings': function () {
      brd.router.navigate('#settings', {trigger:true});
    },
  },


  templateContext: function() {
    return {
      activePage: this.getOption('page')
    }
  }


});
app.views.SettingsView = Backbone.Marionette.View.extend({

  template: tpl.templates.settings,

  regions: {
    leftNavRegion: '.left-navigation',
    page: '.page'
  },

  ui: {
    profileSettings: '.profile-settings-link',
    accountSettings: '.account-settings-link'
  },

  events: {
    'click @ui.profileSettings': function () {
      this.showChildView('page', new app.views.SettingsProfileSectionView());
      this.ui.profileSettings.addClass('active');
      this.ui.accountSettings.removeClass('active');
    },
    'click @ui.accountSettings': function () {
      this.showChildView('page', new app.views.SettingsAccountSectionView());
      this.ui.accountSettings.addClass('active');
      this.ui.profileSettings.removeClass('active');
    }
  },

  initialize: function() {
    // Initialize left navigation region
    brd.regions.leftNavRegion = this.getRegion('leftNavRegion');
  },

  onRender: function() {
    this.showChildView('page', new app.views.SettingsProfileSectionView());
    this.ui.profileSettings.addClass('active');
    this.ui.accountSettings.removeClass('active');
  }


});