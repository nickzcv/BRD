'use strict';

/*******************************************************************************
 APP
 *******************************************************************************/
/**
 * Declare the application object
 *
 * @class app
 */
var app = function () {

  var objApp = {
    collections: {},
    models: {},
    router: {},
    views: {},
    user: null
  };

  objApp.init = function () {
    // console.log('app.init');
    var App = Backbone.Marionette.Application.extend({

      region: '#app',

      onBeforeStart: function onBeforeStart(application, options) {
        // Check If user already logged in
        if (brd.controllers.isLoggedIn()) {
          var useId = brd.controllers.getUserId();
          app.user = new app.models.UserModel({ id: useId });

          //console.log(app.user.attributes);

          app.user.fetch().then(function () {
            console.log('SUCCESS');
            console.log(app.user.attributes);
          }, function () {
            console.log('FAIL');
            console.log(app.user.attributes);
          });
        }

        // Init router
        brd.router = new app.router();
      },

      onStart: function onStart(application, options) {
        // Save main region namespace
        brd.regions.mainRegion = this.getRegion();

        Backbone.history.start();
      }

    });

    var application = new App();
    application.start();
  };

  return objApp;
}();

/*****************************************
 Initialize the application
 ******************************************/
$(document).ready(function () {
  app.init();
});
'use strict';

var brd = {

  model: {},
  router: {},
  regions: {},
  controllers: {

    /*
     * Fully hide modal window
     *
     */
    hideModalFully: function hideModalFully() {
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
    },

    /*
     * Save token in localStorage
     *
     */
    saveToken: function saveToken(token) {
      localStorage.setItem('token', token);
    },

    /*
     * Get token from localStorage
     *
     */
    getToken: function getToken() {
      return localStorage.getItem('token');
    },

    /*
     * Remove token from localStorage
     *
     */
    logout: function logout() {
      localStorage.removeItem('token');
    },

    /*
     * Check token validity
     *
     */
    isLoggedIn: function isLoggedIn() {
      var token = this.getToken();
      var payload = void 0;

      if (token) {
        try {
          payload = token.split('.')[1];
          payload = atob(payload);
          payload = JSON.parse(payload);
        } catch (e) {
          console.log(e);
          return false;
        }
        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    },

    /*
     * Get current user id
     *
     */
    getUserId: function getUserId() {
      var token = this.getToken();
      var payload = void 0;

      if (token) {
        try {
          payload = token.split('.')[1];
          payload = atob(payload);
          payload = JSON.parse(payload);
          return payload._id;
        } catch (e) {
          console.log(e);
          return false;
        }
      }
    }

  }

};
'use strict';

app.router = Marionette.AppRouter.extend({

  routes: {
    '': 'showMainPage',
    'dashboard': 'showDashboardPage',
    'settings': 'showSettingsPage'
  },

  initialize: function initialize() {},

  showMainPage: function showMainPage() {
    brd.regions.mainRegion.show(new app.views.MainView());
    brd.regions.bodyRegion.show(new app.views.HomeView());
  },

  showDashboardPage: function showDashboardPage() {
    brd.regions.mainRegion.show(new app.views.MainView());
    brd.regions.bodyRegion.show(new app.views.DashboardView());
    brd.regions.leftNavRegion.show(new app.views.LeftNavigation({ page: 'dashboard' }));
  },

  showSettingsPage: function showSettingsPage() {
    brd.regions.mainRegion.show(new app.views.MainView());
    brd.regions.bodyRegion.show(new app.views.SettingsView());
    brd.regions.leftNavRegion.show(new app.views.LeftNavigation({ page: 'settings' }));
  }

});
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
Handlebars.registerHelper('compare', function (lvalue, operator, rvalue, options) {
  var operators = void 0,
      result = void 0;
  if (arguments.length < 3) {
    throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
  }
  if (options === undefined) {
    options = rvalue;
    rvalue = operator;
    operator = "===";
  }
  operators = {
    '==': function _(l, r) {
      return l == r;
    },
    '===': function _(l, r) {
      return l === r;
    },
    '!=': function _(l, r) {
      return l != r;
    },
    '!==': function _(l, r) {
      return l !== r;
    },
    '<': function _(l, r) {
      return l < r;
    },
    '>': function _(l, r) {
      return l > r;
    },
    '<=': function _(l, r) {
      return l <= r;
    },
    '>=': function _(l, r) {
      return l >= r;
    },
    'typeof': function _typeof(l, r) {
      return (typeof l === "undefined" ? "undefined" : _typeof2(l)) == r;
    }
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
'use strict';

app.models.HeaderModel = Backbone.Model.extend({

  defaults: {
    user: null
  },

  initialize: function initialize() {
    console.log('initialize Header Model');

    if (app.user) {
      this.updateUser();
    } else {
      console.log('NO app user');
    }
  },

  updateUser: function updateUser() {
    this.set({ user: app.user.attributes });
  }

});
'use strict';

app.models.LoginModel = Backbone.Model.extend({

  urlRoot: 'api/login',

  defaults: {
    email: null,
    password: null
  },

  initialize: function initialize() {
    // console.log('initialize Login Model');
    this.on('invalid', function (model, error) {
      console.log(error);
    });
  },

  validate: function validate(attributes) {
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
  login: function login() {
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
'use strict';

app.models.RegistrationModel = Backbone.Model.extend({

  urlRoot: 'api/users',

  defaults: {
    email: null,
    password: null,
    confirmPassword: null
  },

  initialize: function initialize() {
    console.log('initialize RegistrationModel');
    this.on('invalid', function (model, error) {
      console.log(error);
    });
  },

  validate: function validate(attributes) {
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
  isEmailExist: function isEmailExist(email) {
    return $.ajax({
      url: 'api/user-email-check/',
      data: {
        email: email
      }
    });
  }

});
'use strict';

app.models.SettingsModel = Backbone.Model.extend({

  defaults: {
    user: null
  },

  initialize: function initialize() {
    console.log('-- initialize SettingsModel');

    if (app.user) {
      this.update();
    } else {
      console.log('NO app user');
    }
  },

  update: function update() {
    this.set({ user: app.user.attributes });
  }

});
'use strict';

app.models.UserModel = Backbone.Model.extend({

  urlRoot: 'api/user/',

  defaults: {
    email: null,
    password: null
  },

  initialize: function initialize() {
    console.log('initialize UserModel');
  }
});
"use strict";

app.views.FooterView = Backbone.Marionette.View.extend({
  template: tpl.templates.footer
});
'use strict';

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
    logout: '.logout',
    homeLink: '.home-link'
  },

  events: {
    'click @ui.hamburger': 'toggleMobileMenu',
    'click @ui.registrationBtn': 'showRegistrationView',
    'click @ui.loginBtn': 'showLoginView',
    'click @ui.homeLink': function clickUiHomeLink() {
      brd.router.navigate('#', { trigger: true });
    },
    'click @ui.logout': function clickUiLogout() {
      brd.controllers.logout();
      brd.router.navigate('#', { trigger: true });
    }
  },

  initialize: function initialize() {
    var thisView = this;
    thisView.listenTo(app.user, 'change', function () {
      thisView.model.updateUser();
      thisView.render();
    });
  },

  showRegistrationView: function showRegistrationView() {
    this.showChildView('modalSection', new app.views.RegistrationView({
      model: new app.models.RegistrationModel()
    }));
  },

  showLoginView: function showLoginView() {
    this.showChildView('modalSection', new app.views.LoginView({
      model: new app.models.LoginModel()
    }));
  },

  /*
   * Mobile navigation handler (hamburger)
   *
   */
  toggleMobileMenu: function toggleMobileMenu() {
    this.ui.hamburger.toggleClass('closeBtn');
    this.ui.navigation.toggleClass('hidden');
  }

});
'use strict';

app.views.MainView = Backbone.Marionette.View.extend({

  template: tpl.templates.main,

  regions: {
    headerRegion: 'header',
    bodyRegion: '.content',
    footerRegion: 'footer'
  },

  initialize: function initialize() {
    var thisView = this;
    // Initialize main content region
    brd.regions.bodyRegion = thisView.getRegion('bodyRegion');
  },

  onRender: function onRender() {
    var thisView = this;
    thisView.showChildView('headerRegion', new app.views.HeaderView({ model: new app.models.HeaderModel() }));
    thisView.showChildView('footerRegion', new app.views.FooterView());
  }

});
"use strict";

app.views.SettingsAccountSectionView = Backbone.Marionette.View.extend({

  template: tpl.templates.settings_account_section,

  regions: {},

  initialize: function initialize() {},

  onRender: function onRender() {}

});
'use strict';

app.views.SettingsProfileSectionView = Backbone.Marionette.View.extend({

  template: tpl.templates.settings_profile_section,

  regions: {},

  initialize: function initialize() {
    var thisView = this;
    thisView.listenTo(app.user, 'change', function () {
      thisView.model.update();
      thisView.render();
    });
  },

  onRender: function onRender() {}

});
"use strict";

app.views.FilterView = Backbone.Marionette.View.extend({

  template: tpl.templates.filter

});
'use strict';

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
    'click @ui.mobileFilterBtn': function clickUiMobileFilterBtn() {
      $('.filters').toggleClass('visible');
    },
    'click @ui.closeFilter': function clickUiCloseFilter() {
      $('.filters').removeClass('visible');
    }
  },

  onRender: function onRender() {
    var thisView = this;
    thisView.showChildView('filter', new app.views.FilterView());
  }

});
'use strict';

app.views.ForgotView = app.views.HeaderView.extend({

  template: tpl.templates.forgot,

  ui: {
    forgotPasswordModal: '#forgot'
  },

  events: {},

  onRender: function onRender() {
    //console.log('onRender forgotPasswordModal');
    //this.ui.forgotPasswordModal.modal('show');
  }

});
'use strict';

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
    'hide.bs.modal': function hideBsModal() {
      this.destroy();
    },
    'click .forgot-password': function clickForgotPassword() {
      this.ui.loginModal.modal('hide');
      this.destroy();
      this.showForgotView();
    }
  },

  onRender: function onRender() {
    var thisView = this;
    thisView.ui.loginModal.modal('show');
    thisView.formAddValidation();
  },

  /*
   * Validation rules for the Login form.
   *
   */
  formAddValidation: function formAddValidation() {
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

      submitHandler: function submitHandler() {
        thisView.loginHandler();
      }
    });
  },

  loginHandler: function loginHandler() {
    var thisView = this;
    // Show loader
    thisView.ui.loginForm.hide();
    thisView.ui.loader.show();
    thisView.model.set({
      email: thisView.ui.email.val(),
      password: thisView.ui.password.val()
    });
    // Login request to the server
    thisView.model.login().then(function (data) {
      // Destroy modal
      thisView.destroy();
      brd.controllers.hideModalFully();
      // Save token
      brd.controllers.saveToken(data.token);
      // Duplicate from app.js ---
      // Open setting page
      if (brd.controllers.isLoggedIn()) {
        var useId = brd.controllers.getUserId();
        app.user = new app.models.UserModel({ id: useId });

        app.user.fetch().then(function () {
          console.log('SUCCESS');
          console.log(app.user.attributes);
        }, function () {
          console.log('FAIL');
          console.log(app.user.attributes);
        });
      }
      // ---
      brd.router.navigate('#settings', { trigger: true });
    }, function () {
      thisView.ui.loader.hide();
      thisView.ui.loginForm.fadeIn();
      thisView.ui.danger.html('Ошибка! Неверный email или пароль.').fadeIn();
    });
  },

  showForgotView: function showForgotView() {
    // this.showChildView('modalSection', new app.views.ForgotView());
  }

});
'use strict';

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
    'hide.bs.modal': function hideBsModal() {
      this.destroy();
    }
  },

  onRender: function onRender() {
    this.ui.registrationModal.modal('show');
    this.formAddValidation();
  },

  /*
   * Validation rules for the Registration form.
   *
   */
  formAddValidation: function formAddValidation() {
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

      submitHandler: function submitHandler() {
        thisView.handleSubmitClick();
      }
    });
  },

  /*
   * Check form data before save
   *
   */
  handleSubmitClick: function handleSubmitClick() {
    var thisView = this;
    // Show loader
    thisView.ui.form.hide();
    thisView.ui.loader.show();
    // Check if email already exist
    thisView.model.isEmailExist(thisView.ui.email.val()).then(function (data) {
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
  saveUser: function saveUser() {
    var thisView = this;

    thisView.model.set({
      email: thisView.ui.email.val(),
      password: thisView.ui.password.val(),
      confirmPassword: thisView.ui.confirmPassword.val()
    });

    thisView.model.save(null, {
      success: function success() {
        thisView.ui.loader.hide();
        thisView.ui.danger.hide();
        thisView.ui.success.html('Для завершения регистрации пройдите по ссылке в письме.').fadeIn();
        thisView.ui.checkmark.fadeIn(1000);
      },
      error: function error() {
        thisView.ui.loader.hide();
        thisView.ui.danger.html('Ошибка! Поробуйте еще раз чуть позже.').fadeIn();
        thisView.ui.form.fadeIn();
      }
    });
  }

});
'use strict';

app.views.DashboardView = Backbone.Marionette.View.extend({

  template: tpl.templates.dashboard,

  regions: {
    leftNavRegion: '.left-navigation'
  },

  ui: {},

  events: {},

  initialize: function initialize() {
    // Initialize left navigation region
    brd.regions.leftNavRegion = this.getRegion('leftNavRegion');
  }

});
'use strict';

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
    'click @ui.dashboard': function clickUiDashboard() {
      brd.router.navigate('#dashboard', { trigger: true });
    },
    'click @ui.settings': function clickUiSettings() {
      brd.router.navigate('#settings', { trigger: true });
    }
  },

  templateContext: function templateContext() {
    return {
      activePage: this.getOption('page')
    };
  }

});
'use strict';

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
    'click @ui.profileSettings': function clickUiProfileSettings() {
      this.showChildView('page', new app.views.SettingsProfileSectionView({ model: new app.models.SettingsModel() }));
      this.ui.profileSettings.addClass('active');
      this.ui.accountSettings.removeClass('active');
    },
    'click @ui.accountSettings': function clickUiAccountSettings() {
      this.showChildView('page', new app.views.SettingsAccountSectionView());
      this.ui.accountSettings.addClass('active');
      this.ui.profileSettings.removeClass('active');
    }
  },

  initialize: function initialize() {
    // Initialize left navigation region
    brd.regions.leftNavRegion = this.getRegion('leftNavRegion');
  },

  onRender: function onRender() {
    this.showChildView('page', new app.views.SettingsProfileSectionView({ model: new app.models.SettingsModel() }));
    this.ui.profileSettings.addClass('active');
    this.ui.accountSettings.removeClass('active');
  }

});