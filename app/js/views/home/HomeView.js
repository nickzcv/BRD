app.views.HomeView = Backbone.Marionette.View.extend({

  template: tpl.templates.home,

  ui: {
    mobileFilterBtn: '.mobile-filter-btn .btn',
    closeFilter: 'a.close-btn',
    listRegion: '.ads-list',
  },

  regions: {
    filter: '.filter-home',
    adsFilter: '.content-filter',
    adsList: '@ui.listRegion'
  },

  events: {
    'click @ui.mobileFilterBtn': function() {
      $('.filters').toggleClass('visible');
    },
    'click @ui.closeFilter': function() {
      $('.filters').removeClass('visible');
    }
  },

  modelEvents: {
    'filterCollection': 'reRenderCollection'
  },

  onRender: function() {
    this.showChildView('filter', new app.views.FiltersHomeView({model: new app.models.FiltersHomeModel()}));
    this.showChildView('adsList', new app.views.adsHomeCollectionView({
      model: new app.models.adsHomeModel()
    }));
  }

});