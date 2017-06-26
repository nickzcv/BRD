app.views.SettingsProfileSectionView = Backbone.Marionette.View.extend({

  template: tpl.templates.settings_profile_section,

  ui: {
    lastName: '#lastName',
    name: '#name',
    middleName: '#middleName',
    saveProfile: '.saveProfile',
  },

  events: {
    'click @ui.saveProfile': 'saveProfile'
  },

  initialize: function() {
    console.log('initialize: SettingsProfileSectionView');

    let thisView = this;
    // Get user data from server
    thisView.model.fetch().then(() => {
      thisView.render();
    },() => {
      console.log('FAIL');
      console.log(thisView.model.attributes);
    });

  },

  saveProfile: function (e) {
    let thisView = this;
    e.preventDefault();

    thisView.model.set({
      lastName: thisView.ui.lastName.val(),
      name: thisView.ui.name.val(),
      middleName: thisView.ui.middleName.val()
    });
    // Save updated user model
    thisView.model.save()
    
  }


});