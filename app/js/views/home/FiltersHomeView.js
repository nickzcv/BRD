app.views.FiltersHomeView = Backbone.Marionette.View.extend({

  template: tpl.templates.filter_home,

  regions: {
    filters: '.filters',
    countriesPicker: '.country-picker',
  },

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
  },

  initialize: function() {
    // Show country picker
    this.showChildView('countriesPicker', new app.views.CountriesPickerView({model: this.model.get('countriesModel')}));

  },

  onRender: function() {
    console.log(this.model)
  }


});