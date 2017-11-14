app.views.FiltersHomeView = Backbone.Marionette.View.extend({

  template: tpl.templates.filter_home,

  regions: {
    countriesPicker: '.country-picker',
  },

  ui: {
    addNewBtn: '.add-new',
    toggleMobileFilters: '.show-mobile-filters',
    filters: '.filters-wrapper',
    closeFiltersBtn: '.close-btn',
  },

  events: {
    'click @ui.addNewBtn': 'addNew',
    'click @ui.toggleMobileFilters': 'toggleFilters',
    'click @ui.closeFiltersBtn': 'toggleFilters',
  },

  addNew: function() {
    // Check is user logged in
    if (brd.controllers.isLoggedIn()) {
      // Redirect to add view
      brd.router.navigate('#ads/new', {trigger:true});
    } else {
      // Show forbidden view
      brd.regions.mainRegion.show(new app.views.MainView());
      brd.regions.bodyRegion.show(new app.views.ForbiddenView());
    }
  },

  toggleFilters: function() {
    this.ui.toggleMobileFilters.toggleClass('opened');
    this.ui.filters.toggleClass('visible');

  },

  initialize: function() {
    // Show country picker
    this.showChildView('countriesPicker', new app.views.CountriesPickerView({model: this.model.get('countriesModel')}));

  },

  onRender: function() {
    console.log(this.model)
  }


});