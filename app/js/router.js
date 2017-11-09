app.router = Marionette.AppRouter.extend({

  routes: {
    '': 'showMainPage',
    'faq': 'showFAQPage',
    'dashboard': 'showDashboardPage',
    'ads': 'showAdsPage',
    'ads/new': 'showAdNewForm',
    'settings': 'showSettingsPage'
  },

  initialize: function() {

  },

  // Main
  showMainPage: function() {
    brd.regions.mainRegion.show(new app.views.MainView());
    brd.regions.bodyRegion.show(new app.views.HomeView());
  },

  // FAQ
  showFAQPage: function() {
    brd.regions.mainRegion.show(new app.views.MainView());
    brd.regions.bodyRegion.show(new app.views.FaqView());
  },

  // Dashboard
  showDashboardPage: function() {
    if (brd.controllers.isLoggedIn()) {
      brd.regions.mainRegion.show(new app.views.MainView());
      brd.regions.bodyRegion.show(new app.views.DashboardView());
      brd.regions.leftNavRegion.show(new app.views.LeftNavigation({page: 'dashboard'}));
    } else {
      brd.regions.mainRegion.show(new app.views.MainView());
      brd.regions.bodyRegion.show(new app.views.ForbiddenView());
    }
  },

  // Ads
  showAdsPage: function() {
    if (brd.controllers.isLoggedIn()) {
      brd.regions.mainRegion.show(new app.views.MainView());
      brd.regions.bodyRegion.show(new app.views.AdsView());
      brd.regions.leftNavRegion.show(new app.views.LeftNavigation({page: 'ads'}));
    } else {
      brd.regions.mainRegion.show(new app.views.MainView());
      brd.regions.bodyRegion.show(new app.views.ForbiddenView());
    }
  },

  // New Add
  showAdNewForm: function() {
    if (brd.controllers.isLoggedIn()) {
      brd.regions.mainRegion.show(new app.views.MainView());
      brd.regions.bodyRegion.show(new app.views.AddAdView({model: new app.models.AdModel()}));
      brd.regions.leftNavRegion.show(new app.views.LeftNavigation({page: 'ads'}));
    } else {
      brd.regions.mainRegion.show(new app.views.MainView());
      brd.regions.bodyRegion.show(new app.views.ForbiddenView());
    }
  },

  // Settings
  showSettingsPage: function() {
    if (brd.controllers.isLoggedIn()) {
      brd.regions.mainRegion.show(new app.views.MainView());
      brd.regions.bodyRegion.show(new app.views.SettingsView());
      brd.regions.leftNavRegion.show(new app.views.LeftNavigation({page: 'settings'}));
    } else {
      brd.regions.mainRegion.show(new app.views.MainView());
      brd.regions.bodyRegion.show(new app.views.ForbiddenView());
    }
  }



});
