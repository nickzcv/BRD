app.views.MainView = Mn.View.extend({

  template: tpl.templates.main,

  regions: {
    headerRegion: 'header',
    bodyRegion: '.content',
    footerRegion: 'footer',
    modalSection: '.modal-section'
  },

  initialize: function() {
    // Initialize main content region
    brd.regions.bodyRegion = this.getRegion('bodyRegion');
    // Initialize modals region
    brd.regions.modalSection = this.getRegion('modalSection');
  },

  onRender: function() {
    this.showChildView('headerRegion', new app.views.HeaderView({model: new app.models.HeaderModel}));
    this.showChildView('footerRegion', new app.views.FooterView());
  }

});