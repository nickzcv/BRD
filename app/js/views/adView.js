app.views.adView = Backbone.Marionette.View.extend({

  template: tpl.templates.ad_item,

  regions: {
    message: '.message'
  },

  ui: {
    arrow: '.arrow',
    item: '.ad-item',
    showPhone: '.see-phone',
    categoryBlock: '.category',
    message: '.message',
  },

  events: {
    'click @ui.arrow': 'changeAdView',
    'click @ui.showPhone': 'showPhone',
    'click @ui.message': function() {
      this.getRegion('message').empty();
      this.ui.message.addClass('hidden');
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
    this.ui.message.removeClass('hidden');
    this.showChildView('message', new app.views.SendMessageFormView({page: 'dashboard'}));
  }

});