app.views.AddCompanyView = Mn.View.extend({

  template: tpl.templates.add_company,

  regions: {
    leftNavRegion: '.left-navigation',
    countriesPicker: '.country-picker',
    filters: '.filters',
    companyLogo: '.company-logo'
  },

  initialize: function() {
    let thisView = this;
    // Initialize left navigation region
    brd.regions.leftNavRegion = thisView.getRegion('leftNavRegion');
    // Show country picker
    thisView.showChildView('countriesPicker', new app.views.CountriesPickerView({
      model: thisView.model.get('countriesModel')
    }));

    thisView.showChildView('companyLogo', new app.views.CompanyLogoView({
      model: this.model
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