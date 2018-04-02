app.models.AdModel = Backbone.Model.extend({

  defaults: {
    errorMessage: null,
    isError: false,
    loading: true,
  },

  urlRoot: function() {
    let id = this.get('idAd');
    return `api/ad/${id}`;
  },

  initialize: function() {
    let thisModel = this;
    // when a model has been successfully synced with the server.
    thisModel.on('sync', () => {
      // Init countries model
      thisModel.set({countriesModel: new app.models.CountriesPickerModel({
        country: thisModel.get('country'),
        city: thisModel.get('city')
      })});
      // get countries Model
      let countriesModel = thisModel.get('countriesModel');
      // Listen to country change
      countriesModel.on('change:country', () => {
        thisModel.set({country: countriesModel.get('country')});
      });
      // Listen to city change
      countriesModel.on('change:city', () => {
        thisModel.set({city: countriesModel.get('city')});
      });


      let category = thisModel.get('category');
      // Init child Filters model under categories
      thisModel.set({categoryModel: new app.models.FiltersModel({'category': category})});
      let categoryModel = thisModel.get('categoryModel');
      thisModel.set({categories: categoryModel.attributes.categories});
    });


  },


});
