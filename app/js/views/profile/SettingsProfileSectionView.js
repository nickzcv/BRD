app.views.SettingsProfileSectionView = Backbone.Marionette.View.extend({

  template: tpl.templates.settings_profile_section,

  ui: {
    lastName: '#lastName',
    name: '#name',
    middleName: '#middleName',
    work: '#work',
    position: '#position',
    workEmail: '#workEmail',
    phone: '#phone',
    country: '#country',
    city: '#city',
    saveProfile: '.saveProfile',
  },

  events: {
    'click @ui.saveProfile': 'saveProfile',
    'change @ui.country': 'selectCountry',
    'focus @ui.city': 'selectCity'
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

  selectCountry: function(event) {
    let thisView = this,
        countryId = event.target.value;
    // Save country object into the model
    thisView.model.setCountry(countryId);
  },

  selectCity: function() {
    let thisView = this,
        country = thisView.model.get('country');

    thisView.model.loadCities(country.id).then((cities) => {
      //thisView.render();
      console.log(cities.response.count)
    });
  },

  saveProfile: function(event) {
    let thisView = this;
    event.preventDefault();

    thisView.model.set({
      lastName: thisView.ui.lastName.val(),
      name: thisView.ui.name.val(),
      middleName: thisView.ui.middleName.val(),
      work: thisView.ui.work.val(),
      position: thisView.ui.position.val(),
      phone: thisView.ui.phone.val(),
      workEmail: thisView.ui.workEmail.val(),
    });
    // Save updated user model
    thisView.model.save()
    
  }


});