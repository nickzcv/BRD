app.views.MainView = Backbone.Marionette.View.extend({

  template: tpl.templates.main,

  regions: {
    headerRegion: 'header',
    bodyRegion: '.content',
    footerRegion: 'footer'
  },

  initialize: function() {
    brd.regions.bodyRegion = this.getRegion('bodyRegion');
  },

  onRender: function() {
    var thisView = this;
    thisView.showChildView('headerRegion', new app.views.HeaderView());
    thisView.showChildView('footerRegion', new app.views.FooterView());
  }

});