app.views.MainView = Backbone.Marionette.View.extend({
  template: brd.templates.main,

  regions: {
    header: 'header',
    footer: 'footer'
  },

  onRender: function() {
    this.showChildView('header', new app.views.HeaderView());
    this.showChildView('footer', new app.views.FooterView());
  }

});