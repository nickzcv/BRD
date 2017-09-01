app.views.AdsView = Backbone.Marionette.View.extend({

  template: tpl.templates.ads,

  ui: {
    'leftNavRegion': '.left-navigation',
    'listRegion': '.ads-list',
    'addButton': '.add-button'
  },

  regions: {
    leftNav: '@ui.leftNavRegion',
    adsList: '@ui.listRegion'
  },

  events: {
    'click @ui.addButton': function() {
      brd.router.navigate('#ads/new', {trigger:true});
    }
  },

  initialize: function() {
    // Initialize left navigation region
    brd.regions.leftNavRegion = this.getRegion('leftNav');
  },

  onRender: function() {
    this.showChildView('adsList', new app.views.adsCollectionView());
  }

});