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

  urlRoot: 'api/user/',

  defaults: {
    email: null,
    password: null,
    repassword: null
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