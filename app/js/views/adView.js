app.views.adView = Backbone.Marionette.View.extend({

  template: tpl.templates.ad_item,


  ui: {
    'arrow': '.arrow',
    'item': '.ad-item',

  },

  events: {
    'click @ui.arrow': 'changeAdView'
  },

  /*
   Expanded/hide filter section
   */
  changeAdView: function() {
    this.ui.item.toggleClass('expanded')
  }

});