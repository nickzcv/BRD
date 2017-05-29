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
app.views.FilterView = Backbone.Marionette.View.extend({

  template: brd.templates.filter,


});
app.views.FooterView = Backbone.Marionette.View.extend({
  template: brd.templates.footer
});
app.views.HeaderView = Backbone.Marionette.View.extend({

  template: brd.templates.header,

  ui: {
    hamburger: '.hamburger',
    navigation: '.navigation',
    loginModal: '#login',
    forgotPassword: '.forgot-password',
    registrationModal: '#registration',
    forgotPasswordModal: '#forgot',
    registrationLink: '.register-link'
  },

  events: {
    'click @ui.hamburger': 'toggleMobileMenu',
    'click @ui.registrationLink': function () {
      this.ui.loginModal.modal('hide');
      this.ui.registrationModal.modal('show');
    },
    'click @ui.forgotPassword': function () {
      this.ui.loginModal.modal('hide');
      this.ui.forgotPasswordModal.modal('show');
    }
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

  template: brd.templates.main,

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