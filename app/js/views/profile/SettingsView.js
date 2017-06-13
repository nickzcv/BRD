app.views.SettingsView = Backbone.Marionette.View.extend({

  template: tpl.templates.settings,

  regions: {
    leftNavRegion: '.left-navigation',
    page: '.page'
  },

  ui: {
    profileSettings: '.profile-settings-link',
    accountSettings: '.account-settings-link'
  },

  events: {
    'click @ui.profileSettings': function () {
      this.showChildView('page', new app.views.SettingsProfileSectionView());
      this.ui.profileSettings.addClass('active');
      this.ui.accountSettings.removeClass('active');
    },
    'click @ui.accountSettings': function () {
      this.showChildView('page', new app.views.SettingsAccountSectionView());
      this.ui.accountSettings.addClass('active');
      this.ui.profileSettings.removeClass('active');
    }
  },

  initialize: function() {
    // Initialize left navigation region
    brd.regions.leftNavRegion = this.getRegion('leftNavRegion');
  },

  onRender: function() {
    this.showChildView('page', new app.views.SettingsProfileSectionView());
    this.ui.profileSettings.addClass('active');
    this.ui.accountSettings.removeClass('active');
  }


});