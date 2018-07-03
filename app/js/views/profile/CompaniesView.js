app.views.CompaniesView = Mn.View.extend({

  template: tpl.templates.companies,

  ui: {
    leftNavRegion: '.left-navigation',
    listRegion: '.companies-list',
    addButton: '.add-company',
  },

  regions: {
    leftNav: '@ui.leftNavRegion',
    adsList: '@ui.listRegion'
  },

  events: {
    'click @ui.addButton': function() {
      brd.router.navigateToRoute('profile', 'companies', 'new');
    }
  },

  initialize: function() {
    // Initialize left navigation region
    brd.regions.leftNavRegion = this.getRegion('leftNav');
  },

  onRender: function() {
/*    this.showChildView('adsList', new app.views.AdsCollectionView({
      model: new app.models.AdsListModel()
    }));*/
  }


});