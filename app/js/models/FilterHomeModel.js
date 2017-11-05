app.models.FiltersHomeModel = Backbone.Model.extend({

  defaults: {
    countriesModel: null,
    type: null,
    object: null,
    category: null,
    selectedCategoryId: null,
    country: null,
    city: null,
  },

  initialize: function() {
    // Init child Countries model
    this.set({countriesModel: new app.models.CountriesPickerModel()});
    // Init child Filters model under categories
    this.set({categoryModel: new app.models.FiltersModel()});

    let categoryModel = this.get('categoryModel');
    this.set({categories: categoryModel.attributes.categories});

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
