app.views.CompanyLogoView = Mn.View.extend({

  template: tpl.templates.company_logo,

  regions: {
    logoModal: '.modal-logo-section'
  },

  ui: {
    logo: '.logo',
  },

  events: {
    'click @ui.logo': 'showAddLogoView',
  },

  childViewEvents: {
    'select:item': 'render'
  },

  showAddLogoView: function() {
    this.showChildView('logoModal', new app.views.AddLogoView({logo: this.model.get('logo')}));
  },

});