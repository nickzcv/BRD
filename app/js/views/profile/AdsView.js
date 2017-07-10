app.views.AdsView = Backbone.Marionette.View.extend({

  template: tpl.templates.ads,

  regions: {
    leftNavRegion: '.left-navigation',
    page: '.page'
  },

  ui: {
    'addButton': '.add-new-ad'
  },

  events: {
    'click @ui.addButton': function() {
      brd.router.navigate('#ads/new', {trigger:true});
      //this.showChildView('page', new app.views.AddAdView());
    }
  },

  initialize: function() {
    // Initialize left navigation region
    brd.regions.leftNavRegion = this.getRegion('leftNavRegion');
  }

});