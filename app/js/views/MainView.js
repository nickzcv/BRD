app.views.MainView = Backbone.Marionette.View.extend({

  template: brd.templates.main,

  regions: {
    header: 'header',
    filter: '.filter',
    footer: 'footer'
  },

  ui: {
    mobileFilterBtn: '.mobile-filter-btn .btn',
    closeFilter: 'a.close-btn'
  },

  events: {
    'click @ui.mobileFilterBtn': function () {
      $('.filters').toggleClass('visible');
    },
    'click @ui.closeFilter': function () {
      $('.filters').removeClass('visible');
    }
  },

  onRender: function() {
    this.showChildView('header', new app.views.HeaderView());
    this.showChildView('filter', new app.views.FilterView());
    this.showChildView('footer', new app.views.FooterView());
  }

});