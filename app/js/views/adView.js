app.views.adView = Backbone.Marionette.View.extend({

  template: tpl.templates.ad_item,

  regions: {
    message: '.message'
  },

  ui: {
    arrow: '.arrow',
    item: '.ad-item',
    sendMessage: '.send-message',
    categoryBlock: '.category',
    message: '.message',
  },

  events: {
    'click @ui.arrow': 'changeAdView',
    'click @ui.sendMessage': 'showMessageForm',
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

  showMessageForm: function() {
    this.ui.message.removeClass('hidden');
    this.showChildView('message', new app.views.SendMessageFormView({userId: this.model.get('userId')}));
  }

});