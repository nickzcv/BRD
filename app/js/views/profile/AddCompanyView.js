app.views.AddCompanyView = Mn.View.extend({

  template: tpl.templates.add_company,

  regions: {
    leftNavRegion: '.left-navigation',
    countriesPicker: '.country-picker',
    filters: '.filters'
  },

  ui: {

  },

  events: {

  },

  initialize: function() {
    let thisView = this;
    // Initialize left navigation region
    brd.regions.leftNavRegion = thisView.getRegion('leftNavRegion');
    // Show country picker
    thisView.showChildView('countriesPicker', new app.views.CountriesPickerView({
      model: thisView.model.get('countriesModel')
    }));
  },

  onRender: function() {
    this.formAddValidation();
  },

  /*
   * Validation rules for the add company form.
   *
   */
  formAddValidation: function() {

  },

});