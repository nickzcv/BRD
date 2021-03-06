app.views.AdsView = Mn.View.extend({

  template: tpl.templates.ads,

  ui: {
    leftNavRegion: '.left-navigation',
    listRegion: '.ads-list',
    addButton: '.add-button',
    showArchive: '.go-to-archive'
  },

  regions: {
    leftNav: '@ui.leftNavRegion',
    adsList: '@ui.listRegion'
  },

  events: {
    'click @ui.addButton': function() {
      brd.router.navigateToRoute('profile', 'ads', 'new');
    },
    'click @ui.showArchive': function() {
      // TODO: show archive in case any ads axist in archive
    }
  },

  initialize: function() {
    // Initialize left navigation region
    brd.regions.leftNavRegion = this.getRegion('leftNav');
  },

  onRender: function() {
    this.showChildView('adsList', new app.views.AdsCollectionView({
      model: new app.models.AdsListModel()
    }));
  }

});