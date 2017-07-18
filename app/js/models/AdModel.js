app.models.AdModel = Backbone.Model.extend({

  urlRoot: 'api/ads',

  defaults: {
    countriesModel: null,
    type: null,
    object: null,
    category: null,
    title: null,
    country: null,
    city: null,
    user: null
  },

  initialize: function() {
    let thisModel = this,
        user = app.user.attributes;

/*    thisModel.on('invalid', function(model, error){
      console.log(error);
    });*/

    // Init child countries model
    thisModel.set({countriesModel: new app.models.CountriesPickerModel({
      country: user.country,
      city: user.city
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

/*  validate: function(attr) {
    if (!attr.type || !attr.type || !attr.category || !attr.title || !attr.description) {
      return 'empty one of the required fields.';
    }
  },*/

});
