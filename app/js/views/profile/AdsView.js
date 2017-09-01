app.views.AdsView = Backbone.Marionette.View.extend({

  template: tpl.templates.ads,

  regions: {
    leftNavRegion: '.left-navigation',
    page: '.page'
  },

  ui: {
    'addButton': '.add-button',
    'arrow': '.arrow'
  },

  events: {
    'click @ui.addButton': function() {
      brd.router.navigate('#ads/new', {trigger:true});
    },
    'click @ui.arrow': function() {

    }
  },

  initialize: function() {
    // Initialize left navigation region
    brd.regions.leftNavRegion = this.getRegion('leftNavRegion');
  }

});