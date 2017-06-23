/*******************************************************************************
 APP
 *******************************************************************************/
/**
 * Declare the application object
 *
 * @class app
 */
let app = (function() {

  let objApp = {
    collections: {},
    models: {},
    router: {},
    views: {},
    userObject: {
      // By default user is not authenticated
      isLoggedIn: false
    }
  };

  objApp.init = function() {
    // console.log('app.init');
    const App = Backbone.Marionette.Application.extend({

      region: '#app',

      onBeforeStart: function(application, options) {
        brd.model = new app.models.MainModel(options.data);
        brd.router = new app.router();

        // Check user auth status
        app.userObject.isLoggedIn = brd.controllers.isLoggedIn();
        console.log(`Is logged in: ${app.userObject.isLoggedIn}`);
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



