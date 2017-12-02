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

  childViewEvents: {
    'select:category': 'reRenderCollection',
    'select:country': 'reRenderCollection',
    'select:city': 'reRenderCollection',
    'select:type': 'reRenderCollection',
    'select:object': 'reRenderCollection',
    'clear:filter': 'render',
  },

  onRender: function() {
    this.showChildView('filter', new app.views.FiltersHomeView({model: new app.models.FiltersHomeModel()}));
    this.showChildView('adsList', new app.views.AdsHomeCollectionView());
  },

  reRenderCollection: function(childView) {
    this.showChildView('adsList', new app.views.AdsHomeCollectionView({
      model: childView.model
    }));
  },

  dropFilerCollection: function() {
    this.showChildView('adsList', new app.views.AdsHomeCollectionView());
  }

});