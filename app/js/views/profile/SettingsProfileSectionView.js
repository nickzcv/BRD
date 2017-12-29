app.views.SettingsProfileSectionView = Backbone.Marionette.View.extend({

  template: tpl.templates.settings_profile_section,

  regions: {
    countriesPicker: '.countries-picker',
    modalSection: '.modal-avatar-section'
  },

  ui: {
    alert: '.alert',
    form: 'form',
    photo: '.avatar',
    lastName: '#lastName',
    name: '#name',
    middleName: '#middleName',
    work: '#work',
    position: '#position',
    workEmail: '#workEmail',
    phone1: '#phone1',
    phone2: '#phone2',
    saveProfile: '.saveProfile',
  },

  events: {
    'click @ui.saveProfile': 'saveProfileData',
    'click @ui.photo': 'showAddAvatarView',
  },

  initialize: function() {
    let thisView = this;
    // Get user data from server
    thisView.model.fetch().then(() => {
      thisView.render();
      // Show countries picker
      thisView.showChildView('countriesPicker', new app.views.CountriesPickerView({model: thisView.model.get('countriesModel')}));
    },() => {
      console.log('FAIL: Get user data from server');
    });
  },

  showAddAvatarView: function() {
    this.showChildView('modalSection', new app.views.AddAvatarView());
  },

  saveProfileData: function(event) {
    let thisView = this;
    event.preventDefault();
    // Update model
    thisView.model.set({
      lastName: thisView.ui.lastName.val().trim(),
      name: thisView.ui.name.val().trim(),
      middleName: thisView.ui.middleName.val().trim(),
      work: thisView.ui.work.val().trim(),
      position: thisView.ui.position.val().trim(),
      phone1: thisView.ui.phone1.val().trim(),
      phone2: thisView.ui.phone2.val().trim()
    });
    // Save data on server
    thisView.model.save(null, {
      headers: {
        'Authorization':'Bearer ' + brd.controllers.getToken()
      },
      success: () => {
        app.user.fetch();
        brd.router.navigateToRoute('profile', 'dashboard');
      }
    });


  }

});