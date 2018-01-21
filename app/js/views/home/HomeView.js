app.views.HomeView = Mn.View.extend({

  template: tpl.templates.home,

  ui: {
    mobileFilterBtn: '.mobile-filter-btn .btn',
    closeFilter: 'a.close-btn',
    listRegion: '.ads-list',
    upBtn: '.up',
    companies: '.companies-home',
  },

  regions: {
    filter: '.filter-home',
    adsFilter: '.content-filter',
    adsList: '@ui.listRegion',
    companiesList: '@ui.companies'
  },

  events: {
    'click @ui.mobileFilterBtn': function() {
      $('.filters').toggleClass('visible');
    },
    'click @ui.closeFilter': function() {
      $('.filters').removeClass('visible');
    },
    'click @ui.upBtn': function() {
      $('html, body').animate({scrollTop: 0}, 'slow');
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
    // Filter section
    this.showChildView('filter', new app.views.FiltersHomeView({
      model: new app.models.FiltersHomeModel()
    }));
    // Main ads section
    this.showChildView('adsList', new app.views.AdsHomeCollectionView({

    }));
    // Companies on home
    this.showChildView('companiesList', new app.views.CompaniesHomeView());
  },

  reRenderCollection: function(childView) {
    this.showChildView('adsList', new app.views.AdsHomeCollectionView({
      model: childView.model
    }));
  },

});