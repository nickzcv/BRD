app.models.SettingsModel = Backbone.Model.extend({

  urlRoot: 'api/user/',


  initialize: function() {
    console.log('-- initialize SettingsModel');



  },

  update: function () {
    //this.set({user: app.user.attributes});
  },


});