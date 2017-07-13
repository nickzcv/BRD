app.models.UserModel = Backbone.Model.extend({

  defaults: {
    countriesModel: null
  },

  urlRoot: 'api/user/',

  idAttribute: '_id',


  initialize: function() {
    let thisModel = this;

    // Init countries model
    thisModel.set({countriesModel: new app.models.CountriesPickerModel()});
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

    console.log(thisModel.get('country'));
  },

});