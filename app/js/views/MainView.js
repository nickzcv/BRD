app.views.MainView = Backbone.Marionette.View.extend({
  template: brd.templates.main,

  regions: {
    header: 'header'
  },

  onRender: function() {
    this.showChildView('header', new app.views.HeaderView());
  }

});