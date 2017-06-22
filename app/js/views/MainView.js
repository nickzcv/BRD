app.views.MainView = Backbone.Marionette.View.extend({

  template: tpl.templates.main,

  regions: {
    headerRegion: 'header',
    bodyRegion: '.content',
    footerRegion: 'footer'
  },

  initialize: function() {
    let thisView = this;
    // Initialize main content region
    brd.regions.bodyRegion = thisView.getRegion('bodyRegion');
  },

  onRender: function() {
    let thisView = this;
    thisView.showChildView('headerRegion', new app.views.HeaderView());
    thisView.showChildView('footerRegion', new app.views.FooterView());
  }

});