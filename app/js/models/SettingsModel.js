app.models.SettingsModel = Backbone.Model.extend({

  defaults: {
    user: null
  },

  initialize: function() {
    console.log('-- initialize SettingsModel');

    if (app.user) {
      this.update();
    } else {
      console.log('NO app user');
    }

  },

  update: function () {
    this.set({user: app.user.attributes});
  }


});