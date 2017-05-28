// app.js

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
        title: 'Marionette says hello!'
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










  /*
   * Mobile navigation handler (hamburger)
   *
   */
  $('.hamburger').on('click', function() {
    $(this).toggleClass('closeBtn');
    $('.navigation').toggleClass('hidden');
  });

  /*
   * Mobile filter handler
   *
   */
  $('.mobile-filter-btn .btn').on('click', function() {
    $('.filters').toggleClass('visible');
  });

  $('a.close-btn').on('click', function() {
    $('.filters').removeClass('visible');
  });


  $('.register-link').on('click', function() {
    $('#login').modal('hide');
    $('#registration').modal('show');
  });





app.models.MainModel = Backbone.Model.extend();
app.views.HeaderView = Backbone.Marionette.View.extend({
  template: brd.templates.header
});
app.views.MainView = Backbone.Marionette.View.extend({
  template: brd.templates.main,

  regions: {
    header: 'header'
  },

  onRender: function() {
    this.showChildView('header', new app.views.HeaderView());
  }

});