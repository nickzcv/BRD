app.views.MainView = Backbone.Marionette.View.extend({

  template: tpl.templates.main,

  regions: {
    header: 'header',
    content: '.content',
    footer: 'footer'
  },

  onRender: function() {
    var thisView = this;
    thisView.showChildView('header', new app.views.HeaderView());
    thisView.showChildView('content', new app.views.HomeView());
    thisView.showChildView('footer', new app.views.FooterView());
  }

});