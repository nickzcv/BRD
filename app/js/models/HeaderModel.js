app.models.HeaderModel = Backbone.Model.extend({

  defaults: {
    user: null
  },

  initialize: function() {
    console.log('initialize Header Model');

    if (app.user) {
      this.updateUser();
    } else {
      console.log('NO app user');
    }

  },

  updateUser: function () {
    this.set({user: app.user.attributes});
    console.log(this.attributes.user);
  }


});