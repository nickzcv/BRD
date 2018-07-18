app.views.CompaniesHomeView = Mn.View.extend({

  template: tpl.templates.companies_home,

  ui: {
    listRegion: '.companies-list',
  },

  regions: {
    companiesList: '@ui.listRegion',
  },

  onRender: function() {
    // Home companies section
    this.showChildView('companiesList', new app.views.CompaniesHomeCollectionView());
  },

});