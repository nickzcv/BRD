app.router = Marionette.AppRouter.extend({

  routes: {
    '': 'showMainPage',
    'test': 'test',
    'email/:email': 'showEmail'
  },

  initialize: function() {

  },

  showMainPage: function() {
    console.log('router - showMainPage');
    brd.regions.mainRegion.show(new app.views.MainView({}));
    brd.regions.bodyRegion.show(new app.views.HomeView({}));

  },

  test: function() {
    console.log('router - test');

    brd.regions.mainRegion.show(new app.views.MainView({}));
    //brd.regions.bodyRegion.show(new app.views.HomeView({}));
  },

  showProfilePage: function() {
    console.log(email)
  },

  showEmail: function(email) {
    console.log(email)
  }

});
