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
    contacts: {
      takeFrom: 'profile',
      phones: []
    }
  },

  initialize: function() {
    let thisModel = this;

    thisModel.on('invalid', function(model, error){
      console.log(error);
    });

    // Init child Countries model
    thisModel.set({countriesModel: new app.models.CountriesPickerModel()});
    // Init child Filters model under categories
    thisModel.set({categoryModel: new app.models.FiltersModel()});
    //thisModel.set({categoryModel: new app.models.FiltersModel()});

    console.log( thisModel );

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

  validate: function(attr) {
    if (!attr.type || !attr.category || !attr.title || !attr.country) {
      return 'empty one of the required fields.';
    }
  },

});
