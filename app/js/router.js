app.router = Marionette.AppRouter.extend({

  routes: {
    '': 'showMainPage',
    'dashboard': 'showDashboardPage',
    'settings': 'showSettingsPage'
  },

  initialize: function() {
    
  },

  showMainPage: function() {
    brd.regions.mainRegion.show(new app.views.MainView());
    brd.regions.bodyRegion.show(new app.views.HomeView());
  },

  showDashboardPage: function() {
    brd.regions.mainRegion.show(new app.views.MainView());
    brd.regions.bodyRegion.show(new app.views.DashboardView());
    brd.regions.leftNavRegion.show(new app.views.LeftNavigation({page: 'dashboard'}));
  },

  showSettingsPage: function() {
    brd.regions.mainRegion.show(new app.views.MainView());
    brd.regions.bodyRegion.show(new app.views.SettingsView());
    brd.regions.leftNavRegion.show(new app.views.LeftNavigation({page: 'settings'}));
  }



});
