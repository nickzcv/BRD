app.views.MainView = Mn.View.extend({

  template: tpl.templates.main,

  regions: {
    headerRegion: 'header',
    bodyRegion: '.content',
    footerRegion: 'footer'
  },

  initialize: function() {
    // Initialize main content region
    brd.regions.bodyRegion = this.getRegion('bodyRegion');
  },

  onRender: function() {
    this.showChildView('headerRegion', new app.views.HeaderView({model: new app.models.HeaderModel}));
    this.showChildView('footerRegion', new app.views.FooterView());
  }

});