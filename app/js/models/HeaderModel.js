app.models.HeaderModel = Backbone.Model.extend({

  defaults: {
    user: null
  },

  initialize: function() {
    if (app.user) {
      this.updateUser();
    }
  },

  updateUser: function () {
    this.set({user: app.user.attributes});
  }


});