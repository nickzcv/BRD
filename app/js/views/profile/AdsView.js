app.views.AdsView = Backbone.Marionette.View.extend({

  template: tpl.templates.ads,

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