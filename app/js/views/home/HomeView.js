app.views.HomeView = Mn.View.extend({

  template: tpl.templates.home,

  ui: {
    mobileFilterBtn: '.mobile-filter-btn .btn',
    closeFilter: 'a.close-btn',
    homeContent: '.home-content',
    upBtn: '.up',
    addCompany: '.add-company',
    companies: '.companies-home',
  },

  regions: {
    filter: '.filter-home',
    adsFilter: '.content-filter',
    homeContentRegion: '@ui.homeContent',
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
    },
    'click @ui.addCompany': function() {
      brd.router.navigateToRoute('profile', 'companies', 'new');
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
    // Content
    this.showChildView('homeContentRegion', new app.views.HomeContentView({
      model: new app.models.HomeContentModel({filters: null})
    }));
    // Companies on home
    this.showChildView('companiesList', new app.views.CompaniesHomeView());
  },

  reRenderCollection: function(childView) {
    let filtersModel = childView.model.attributes;
    // Re-render content view if filters has been selected
    this.showChildView('homeContentRegion', new app.views.HomeContentView({
      model: new app.models.HomeContentModel({filters: filtersModel})
    }));
  }

});