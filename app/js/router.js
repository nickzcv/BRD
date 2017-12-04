app.router = Marionette.AppRouter.extend({

/*  routes: {
    '': 'showMainPage',
    'faq': 'showFAQPage',
    'dashboard': 'showDashboardPage',
    'ads': 'showAdsPage',
    'ads/new': 'showAdNewForm',
    'settings': 'showSettingsPage'
  },*/

  /**
   * Ordered priority list for determining which route the URL matches
   *
   */
  routes: {
    // Default route for at most 5 page levels
    '(:page1)(/:page2)(/:page3)(/:page4)(/:page5)(/)': 'handleRouteChange',
  },

  /**
   * Route change handler which runs on every navigation event
   *
   * @param {String} page1 Page1 from URL
   * @param {String} page2 Page2 from URL
   * @param {String} page3 Page3 from URL
   * @param {String} page4 Page4 from URL
   * @param {String} page5 Page5 from URL
   * @memberOf app.router
   */
  handleRouteChange: function(page1, page2, page3, page4, page5) {
    // scroll to the top if a new page
    window.scrollTo(0, 0);

    // if a new page then empty the main region
    if (brd.regions.mainRegion) {
      brd.regions.mainRegion.show(new app.views.SpinnerView());
      brd.regions.mainRegion.show(new app.views.MainView());
    }

    switch (page1) {
      // Home page route
      case 'home':
        brd.regions.bodyRegion.show(new app.views.HomeView());
        break;
      // Forbidden page
      case 'forbidden':
        brd.regions.bodyRegion.show(new app.views.ForbiddenView());
        break;
      // FAQ page route
      case 'faq':
        brd.regions.bodyRegion.show(new app.views.FaqView());
        break;
      // Dashboard
      case 'dashboard':
        if (brd.controllers.isLoggedIn()) {
          brd.regions.bodyRegion.show(new app.views.DashboardView());
          brd.regions.leftNavRegion.show(new app.views.LeftNavigation({page: page1}));
        } else {
          this.navigateToRoute('forbidden');
        }
        break;
      // Settings
      case 'settings':
        if (brd.controllers.isLoggedIn()) {
          brd.regions.bodyRegion.show(new app.views.SettingsView());
          brd.regions.leftNavRegion.show(new app.views.LeftNavigation({page: page1}));
        } else {
          this.navigateToRoute('forbidden');
        }
        break;
      // Ads
      case 'ads':
        if (brd.controllers.isLoggedIn()) {
          if (page2 && page2 === 'new') {
            // Add new ad form
            brd.regions.bodyRegion.show(new app.views.AddAdView({model: new app.models.AdModel()}));
          } else {
            // Main ads page
            brd.regions.bodyRegion.show(new app.views.AdsView());
          }
          brd.regions.leftNavRegion.show(new app.views.LeftNavigation({page: page1}));
        } else {
          this.navigateToRoute('forbidden');
        }
        break;
      // Default redirect to home
      default:
        this.navigateToRoute('home');
    }

  },

  /**
   * Navigate to the specific route
   *
   * @param {String} page1 Page to navigate
   * @param {String} page2 2nd level page to to navigate
   * @param {String} [page3] 3d level page to to navigate
   * @param {String} [page4] 4d level page to to navigate
   * @param {Boolean} [replace_history] Set to true if we need to replace history
   * @memberOf app.router
   * @instance
   */
  navigateToRoute: function(page1, page2, page3, page4, replace_history) {
    let route = '';
    // Set default values if values passed in are null/false
    replace_history = replace_history || false;
    // Create the route for each page passed
    $.each(arguments, function() {
      if ($.type(this) === "string") {
        route += '/' + this;
      }
    });
    // navigate to the new route
    Backbone.history.navigate(route, {
      replace: replace_history,
      trigger: true
    });
  },

});
