app.views.adView = Backbone.Marionette.View.extend({

  template: tpl.templates.ad_item,

  regions: {
    phones: '.phones'
  },

  ui: {
    arrow: '.arrow',
    item: '.ad-item',
    showPhone: '.see-phone',
    categoryBlock: '.category',
    phones: '.phones',
  },

  events: {
    'click @ui.arrow': 'changeAdView',
    'click @ui.showPhone': 'showPhone',
    'click @ui.phones': function () {
      this.getRegion('phones').empty();
      this.ui.phones.addClass('hidden');
    }
  },

  /*
  *   Expanded/hide filter section
  */
  changeAdView: function() {
    this.ui.item.toggleClass('expanded');
  },

  /*
   *   Show phones section
   */
  showPhone: function() {
    this.ui.phones.toggleClass('hidden');
    this.showChildView('phones', new app.views.PhonesView({model: this.model}));
  }

});