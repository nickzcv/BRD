app.views.adView = Mn.View.extend({

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
    tab: '.tab',
    star: '.star',
    adDescription: '.ad-description',
  },

  events: {
    'click @ui.arrow': 'changeAdView',
    'click @ui.tab': 'newTab',
    'click @ui.star': 'addStar',
    'click @ui.sendMessage': 'showMessageForm',
    'click @ui.close': function() {
      this.getRegion('message').empty();
      this.ui.message.addClass('hidden');
      this.ui.table.removeClass('hidden');
    }
  },

  initialize: function(options) {
    this.model.set({
      isLoggedIn: options.isLoggedIn,
      currentUserId: options.currentUserId,
    }, {silent: true});
  },

  /*
  *   Expanded/hide filter section
  */
  changeAdView: function() {
    this.ui.item.toggleClass('expanded');
    // toggle ad description for mobile
    this.ui.adDescription.toggleClass('hidden-xs');
  },

  /*
   *  Show send message form
   */
  showMessageForm: function() {
    this.ui.table.addClass('hidden');
    this.ui.message.removeClass('hidden');
    this.showChildView('message', new app.views.SendMessageFormView({userId: this.model.get('userId')}));
  },

  /*
   *  Go to full page view
   */
  newTab: function() {
    //console.log('newTab');
    //console.log(this.model.get('_id'));
  },

  addStar: function() {
    let favorites = this.model.get('favorites');
    // If array not empty
    if (favorites.length) {
      let userId = brd.controllers.getUserId();
      // If not favorited before
      if (!favorites.includes(userId)) {
        // Add to favorite
        // TODO: run service request
      } else {
        // TODO: remove from favorite
      }
    } else {
      // Add to favorite
      // TODO: run service request
    }

  },

});