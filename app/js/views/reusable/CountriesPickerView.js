app.views.CountriesPickerView = Backbone.Marionette.View.extend({

  template: tpl.templates.countries_picker,

  ui: {
    country: '#country',
    city: '#city',
    cityDropdown: '.cityDropdown',
    cityDropdownElement: '.city'
  },

  events: {
    'change @ui.country': 'selectCountry',
    'input @ui.city': 'searchCity',
    'click @ui.cityDropdownElement': 'selectCity',
    'change @ui.city': 'checkCity',
  },

  initialize: function() {
    let thisView = this;
    // Get countries from VK api
    thisView.model.loadCountries().then((countries) => {
      thisView.model.set({countries: countries.response.items});
      thisView.render();
    },(error) => {
      console.log(error);
    });
  },

  selectCountry: function(event) {
    let thisView = this,
        countryId = event.target.value;
    // Check if county selected
    if(countryId) {
      // Save country object into the model
      thisView.model.setCountry(countryId);
      thisView.model.set({city: null});
    } else {
      thisView.model.set({
        country: null,
        city: null
      });
    }

    thisView.render();
  },


  searchCity: function() {
    let thisView = this,
        country = thisView.model.get('country'),
        value = thisView.ui.city.val();
    // Get cities by country id
    thisView.model.searchCities(country.id, value).then((cities) => {
      // Display dropdown
      thisView.model.set({cities: cities.response.items});
      thisView.render();
      thisView.ui.cityDropdown.addClass('show');
      // return focus and value after render
      thisView.ui.city.val(value);
      thisView.ui.city.focus();
    });
  },


  selectCity: function(event) {
    let thisView = this,
        cityId = event.currentTarget.getAttribute('data-id');

    if(cityId) {
      this.model.setCity(cityId);
      thisView.render();
    }

  },

  // Check if city exist
  // Do not allow enter random text
  checkCity: function () {
    let thisView = this,
        isVisible = thisView.ui.cityDropdown.is(":visible"),
        city = thisView.model.get('city'),
        inputValue = thisView.ui.city.val();
    // If cities dropdown visible
    if(isVisible && city && !inputValue) {
      thisView.ui.cityDropdown.removeClass('show');
      thisView.model.set({city: null});
      thisView.render();
    } else if(isVisible && city) {
      thisView.ui.cityDropdown.removeClass('show');
      thisView.ui.city.val(city.title);
    }
  },


});