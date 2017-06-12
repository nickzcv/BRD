app.views.SettingsView = Backbone.Marionette.View.extend({

  template: tpl.templates.settings,

  regions: {
    leftNavRegion: '.left-navigation'
  },

  ui: {

  },

  events: {

  },

  initialize: function() {
    // Initialize left navigation region
    brd.regions.leftNavRegion = this.getRegion('leftNavRegion');
  }


});