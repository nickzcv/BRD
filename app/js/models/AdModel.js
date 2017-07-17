app.models.AdModel = Backbone.Model.extend({

  defaults: {
    countriesModel: null,
    country: null,
    city: null
  },


  initialize: function() {
    let thisModel = this;
    // Init child countries model
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
  },


});
