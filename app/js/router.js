app.router = Marionette.AppRouter.extend({

  routes: {
    '': 'showMainPage',
    'settings': 'showSettingsPage'
  },

  initialize: function() {

  },

  showMainPage: function() {
    console.log('router - showMainPage');
    brd.regions.mainRegion.show(new app.views.MainView({}));
    brd.regions.bodyRegion.show(new app.views.HomeView({}));

  },

  showSettingsPage: function() {
    console.log('router - showSettingsPage');
    brd.regions.mainRegion.show(new app.views.MainView({}));
    brd.regions.bodyRegion.show(new app.views.SettingsView({}));
  }



});
