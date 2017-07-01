app.views.SettingsProfileSectionView = Backbone.Marionette.View.extend({

  template: tpl.templates.settings_profile_section,

  ui: {
    form: 'form',
    photo: '#photo',
    lastName: '#lastName',
    name: '#name',
    middleName: '#middleName',
    work: '#work',
    position: '#position',
    workEmail: '#workEmail',
    phone: '#phone',
    country: '#country',
    city: '#city',
    cityDropdown: '.cityDropdown',
    cityDropdownElement: '.city',
    saveProfile: '.saveProfile',
  },

  events: {
    'click @ui.saveProfile': 'saveProfileData',
    'change @ui.country': 'selectCountry',
    'input @ui.city': 'searchCity',
    'click @ui.cityDropdownElement': 'selectCity',
    'click @ui.form': 'checkCity',
    'change @ui.photo': 'addPhoto'
  },

  initialize: function() {
    let thisView = this;
    // Get user data from server
    thisView.model.fetch().then(() => {
      thisView.render();
    },() => {
      console.log('FAIL: Get user data from server');
    });
    // Get countries from VK api
    thisView.model.loadCountries().then((countries) => {
      thisView.model.set({countries: countries.response.items});
      thisView.render();
    },(error) => {
      console.log(error);
    });
  },


  addPhoto: function(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = function(e) {
        //$('#preview').attr('src', e.target.result);
        $('#preview').css('background', 'url('+e.target.result+')').css('background-size', 'cover');

      };

      reader.readAsDataURL(event.target.files[0]);
    }
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

    thisView.cacheProfile();
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
      thisView.cacheProfile();
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
      thisView.ui.city.val(city.title)
    }
  },

  // Save form data into the model before rerender
  cacheProfile: function() {
    let thisView = this;
    thisView.model.set({
      lastName: thisView.ui.lastName.val(),
      name: thisView.ui.name.val(),
      middleName: thisView.ui.middleName.val(),
      work: thisView.ui.work.val(),
      position: thisView.ui.position.val(),
      phone: thisView.ui.phone.val(),
      workEmail: thisView.ui.workEmail.val(),
    });
  },

  saveProfileData: function(event) {
    let thisView = this;
    event.preventDefault();
    thisView.cacheProfile();
    thisView.model.save();
  }

});