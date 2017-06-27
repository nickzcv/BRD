app.views.SettingsAccountSectionView = Backbone.Marionette.View.extend({

  template: tpl.templates.settings_account_section,

  regions: {

  },

  initialize: function() {

  },

  onRender: function() {

  },

  templateContext: function() {
    return {
      email: this.getOption('email')
    }
  }

});