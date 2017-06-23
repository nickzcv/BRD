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
    userObject: null
  };

  objApp.init = function() {
    // console.log('app.init');
    const App = Backbone.Marionette.Application.extend({

      region: '#app',

      onBeforeStart: function(application, options) {
        // Init router
        brd.router = new app.router();
        // Check user auth status
        if (brd.controllers.isLoggedIn()) {
          app.userObject = new app.models.UserModel();
        }

        console.log(app.userObject);

      },

      onStart: function(application, options) {
        // Save main region namespace
        brd.regions.mainRegion = this.getRegion();

        Backbone.history.start();
      }

    });

    const application = new App();
    application.start();
  };

  return objApp;
})();


/*****************************************
 Initialize the application
 ******************************************/
$(document).ready(function() {
  app.init();
});



