app.views.HeaderView = Backbone.Marionette.View.extend({
  template: brd.templates.header,

  ui: {
    hamburger: '.hamburger',
    navigation: '.navigation'
  },

  events: {
    'click @ui.hamburger': 'toggleMobileMenu'
  },


  /*
   * Mobile navigation handler (hamburger)
   *
   */
  toggleMobileMenu: function () {
    this.ui.hamburger.toggleClass('closeBtn');
    this.ui.navigation.toggleClass('hidden');
  }

});