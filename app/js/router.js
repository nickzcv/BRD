app.router = Marionette.AppRouter.extend({

  routes: {
    'email/:email': 'showEmail'
  },

  showEmail: function(email) {
    console.log(email)
  }

});
