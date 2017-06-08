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



