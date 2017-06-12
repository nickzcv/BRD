app.views.DashboardView = Backbone.Marionette.View.extend({

  template: tpl.templates.dashboard,

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