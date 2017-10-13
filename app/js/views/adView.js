app.views.adView = Backbone.Marionette.View.extend({

  template: tpl.templates.ad_item,

  regions: {
    message: '.message',
  },

  ui: {
    arrow: '.arrow',
    item: '.ad-item',
    sendMessage: '.send-message',
    categoryBlock: '.category',
    message: '.message',
    close: '.close',
    table: '.filters-table',
  },

  events: {
    'click @ui.arrow': 'changeAdView',
    'click @ui.sendMessage': 'showMessageForm',
    'click @ui.close': function() {
      this.getRegion('message').empty();
      this.ui.message.addClass('hidden');
      this.ui.table.removeClass('hidden');
    }
  },

  /*
  *   Expanded/hide filter section
  */
  changeAdView: function() {
    this.ui.item.toggleClass('expanded');
  },

  showMessageForm: function() {
    this.ui.table.addClass('hidden');
    this.ui.message.removeClass('hidden');
    this.showChildView('message', new app.views.SendMessageFormView({userId: this.model.get('userId')}));
  }

});