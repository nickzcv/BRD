app.views.adView = Backbone.Marionette.View.extend({

  template: tpl.templates.ad_item,


  ui: {
    arrow: '.arrow',
    item: '.ad-item',
    showPhone: '.see-phone',
  },

  events: {
    'click @ui.arrow': 'changeAdView',
    'click @ui.showPhone': 'showPhone',
  },

  /*
  *   Expanded/hide filter section
  */
  changeAdView: function() {
    this.ui.item.toggleClass('expanded')
  },

  showPhone: function() {
    console.log(this.model.attributes.contacts)
  }

});