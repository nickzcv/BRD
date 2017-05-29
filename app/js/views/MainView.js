app.views.MainView = Backbone.Marionette.View.extend({

  template: tpl.templates.main,

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
    var thisView = this;
    thisView.showChildView('header', new app.views.HeaderView());
    thisView.showChildView('filter', new app.views.FilterView());
    thisView.showChildView('footer', new app.views.FooterView());
  }

});