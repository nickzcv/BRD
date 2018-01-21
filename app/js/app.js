/*******************************************************************************
 APP
 *******************************************************************************/
/**
 * Declare the application object
 *
 * @class app
 */
moment.locale('ru');

let app = (function() {

  let objApp = {
    collections: {},
    models: {},
    router: {},
    views: {},
    user: null
  };

  objApp.init = function() {
    // console.log('app.init');
    const App = Mn.Application.extend({

      region: '#app',

      onBeforeStart: function(application, options) {
        // Check If user already logged in
        if (brd.controllers.isLoggedIn()) {
          let useId = brd.controllers.getUserId();
          app.user = new app.models.UserModel({_id: useId});
          // Store user profile data into the app
          app.user.fetch().then(() => {
            //console.log('SUCCESS');
            //console.log(app.user.attributes);
          },() => {
            console.log('FAIL');
            console.log(app.user.attributes);
          });
        }

        // Init router
        brd.router = new app.router();
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



