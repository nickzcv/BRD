app.models.CompanyModel = Backbone.Model.extend({

  // urlRoot: 'api/companies',

  defaults: {
    countriesModel: null,
    logo: brd.controllers.getUserId()+'_logo'
  },

  initialize: function() {
    // Init child Countries model
    this.set({countriesModel: new app.models.CountriesPickerModel()});
    // get countries Model
    let countriesModel = this.get('countriesModel');
    // Listen to country change
    countriesModel.on('change:country', () => {
      this.set({country: countriesModel.get('country')});
    });
    // Listen to city change
    countriesModel.on('change:city', () => {
      this.set({city: countriesModel.get('city')});
    });

  },


});
