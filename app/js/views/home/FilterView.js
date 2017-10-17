app.views.FilterView = Backbone.Marionette.View.extend({

  template: tpl.templates.filter_home,

  ui: {
    addNewBtn: '.add-new',
  },

  events: {
    'click @ui.addNewBtn': 'addNew'
  },

  addNew: function() {
    // Check is user logged in
    if (brd.controllers.isLoggedIn()) {
      // Redirect to add view
      brd.router.navigate('#ads/new', {trigger:true});
    } else {
      brd.regions.mainRegion.show(new app.views.MainView());
      brd.regions.bodyRegion.show(new app.views.ForbiddenView());
    }
  }


});