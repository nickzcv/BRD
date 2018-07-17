app.models.CompanyModel = Backbone.Model.extend({

  urlRoot: 'api/companies',

  defaults: {
    countriesModel: null,
    companyName: null,
    logo: brd.controllers.getUserId()+'_logo',
    categoryId: null,
    country: null,
    city: null,
    phones: null,
    address: null,
    website: null,
    year: null,
    count: null,
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

    // Init child Filters model under categories
    this.set({categoryModel: new app.models.FiltersModel()});
    let categoryModel = this.get('categoryModel');
    this.set({categories: categoryModel.attributes.categories});

  },


});
