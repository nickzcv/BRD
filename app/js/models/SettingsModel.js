app.models.SettingsModel = Backbone.Model.extend({

  urlRoot: 'api/user/',

  idAttribute: '_id',

  initialize: function() {
    //console.log('-- initialize SettingsModel');
  },

  loadCountries: function() {
    return $.ajax({
      method: 'GET',
      dataType: 'jsonp',
      url: 'http://api.vk.com/method/database.getCountries?v=5.5&need_all=1&count=300'
    });
  },

  searchCities: function(countryId, searchString) {
    return $.ajax({
      method: 'GET',
      dataType: 'jsonp',
      url: `http://api.vk.com/method/database.getCities?v=5.5&country_id=${countryId}&need_all=1&count=10&q=${searchString}`
    });
  },

  setCountry: function(id) {
    let thisModel = this;
    // Find selected country from the list
    let selectedCountry = thisModel.get('countries').filter((obj) => {
      return obj.id == id;
    });
    // Save country object into the model
    thisModel.set({country: Object.assign({}, selectedCountry[0])});
  },

  setCity: function(id) {
    let thisModel = this;
    // Find selected city from the list
    let selectedCity = thisModel.get('cities').filter((obj) => {
      return obj.id == id;
    });
    // Save city object into the model
    thisModel.set({city: Object.assign({}, selectedCity[0])});
  },


});