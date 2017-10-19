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

  onRender: function() {
    this.showChildView('filter', new app.views.FilterView());
    this.showChildView('adsList', new app.views.adsHomeCollectionView());
  }

});