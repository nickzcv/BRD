app.router = Marionette.AppRouter.extend({

  routes: {
    '': 'showMainPage',
    'email/:email': 'showEmail'
  },

  showEmail: function(email) {
    console.log(email)
  },

  showMainPage: function() {
    console.log('Main')
  }

});
