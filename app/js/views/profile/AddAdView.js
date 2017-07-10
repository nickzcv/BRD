app.views.AddAdView = Backbone.Marionette.View.extend({

  template: tpl.templates.add_ad,

  regions: {
    leftNavRegion: '.left-navigation',
  },

  initialize: function() {
    // Initialize left navigation region
    brd.regions.leftNavRegion = this.getRegion('leftNavRegion');
  },

  onRender: function() {

  },


});