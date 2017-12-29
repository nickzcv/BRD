app.models.AdModel = Backbone.Model.extend({

  urlRoot: 'api/ads',

  defaults: {
    countriesModel: null,
    type: null,
    object: null,
    category: null,
    selectedCategoryId: null,
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
      //console.log(error);
    });

    // Init child Countries model
    thisModel.set({countriesModel: new app.models.CountriesPickerModel()});
    // Init child Filters model under categories
    thisModel.set({categoryModel: new app.models.FiltersModel()});
    let categoryModel = thisModel.get('categoryModel');

    // console.log(categoryModel);

    thisModel.set({categories: categoryModel.attributes.categories});

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

  setCategoryObject: function() {
    let category = _.findWhere(this.get('categories'), {id: this.get('selectedCategoryId')});
    this.set({category})
  }

});
