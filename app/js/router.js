app.router = Marionette.AppRouter.extend({

  routes: {
    '': 'showMainPage',
    'profile': 'showProfilePage'
  },

  initialize: function() {

  },

  showMainPage: function() {
    console.log('router - showMainPage');
    brd.regions.mainRegion.show(new app.views.MainView({}));
    brd.regions.bodyRegion.show(new app.views.HomeView({}));

  },

  showProfilePage: function() {
    console.log('router - showProfilePage');

    brd.regions.mainRegion.show(new app.views.MainView({}));
    brd.regions.bodyRegion.show(new app.views.ProfileView({}));
  }



});
