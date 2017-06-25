app.views.SettingsProfileSectionView = Backbone.Marionette.View.extend({

  template: tpl.templates.settings_profile_section,

  regions: {

  },

  initialize: function() {
    let thisView = this;
    thisView.listenTo(app.user, 'change', () => {
      thisView.model.update();
      thisView.render();
    });
  },

  onRender: function() {

  }


});