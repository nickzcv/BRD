app.views.ForbiddenView = Backbone.Marionette.View.extend({

  template: tpl.templates.forbidden,

  regions: {
    modalSection: '.modal-section'
  },

  ui: {
    'login': '.login'
  },

  events: {
    'click @ui.login': 'showLoginView',
  },

  showLoginView: function() {
    this.showChildView('modalSection', new app.views.LoginView({
      model: new app.models.LoginModel
    }));
  },

});