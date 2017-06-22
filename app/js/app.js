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
      isLoggedIn: false
    }
  };

  objApp.init = function() {
    // console.log('app.init');
    const App = Backbone.Marionette.Application.extend({

      region: '#app',

      onBeforeStart: function(application, options) {
        let test = 'user NOT authenticated';
        brd.model = new app.models.MainModel(options.data);
        brd.router = new app.router();

        console.log('Is logged in: '+brd.controllers.isLoggedIn());
        // If user already logged in
        if (brd.controllers.isLoggedIn()) {
          test = 'user authenticated';
          app.userObject.isLoggedIn = true;
        }

        console.log(test);
        console.log(app.userObject.isLoggedIn);
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



