app.router = Marionette.AppRouter.extend({

  routes: {
    '': 'showMainPage',
    'dashboard': 'showDashboardPage',
    'settings': 'showSettingsPage'
  },

  initialize: function() {

  },

  showMainPage: function() {
    console.log('router - showMainPage');
    brd.regions.mainRegion.show(new app.views.MainView({}));
    brd.regions.bodyRegion.show(new app.views.HomeView({}));

  },

  showDashboardPage: function() {
    console.log('router - showDashboardPage');
    brd.regions.mainRegion.show(new app.views.MainView({}));
    brd.regions.bodyRegion.show(new app.views.DashboardView({}));
  },

  showSettingsPage: function() {
    console.log('router - showSettingsPage');
    brd.regions.mainRegion.show(new app.views.MainView({}));
    brd.regions.bodyRegion.show(new app.views.SettingsView({}));
  }



});
