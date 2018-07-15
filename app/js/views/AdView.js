app.views.AdView = Mn.View.extend({

  template: tpl.templates.ad_item,

  regions: {
    tabRegion: '.tab-region',
    message: '.message',
  },

  ui: {
    arrow: '.arrow',
    item: '.ad-item',
    categoryBlock: '.category',
    message: '.message',
    table: '.left-border',
    star: '.star',
    adDescription: '.ad-description',
    price: '.price'
  },

  events: {
    'click @ui.arrow': 'changeAdView',
    'click @ui.fullPageIcon': 'fullPage',
    'click @ui.star': 'addStar',
    'click @ui.editAdIcon': 'editAd'
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
   *  Go to full page view
   */
  fullPage: function() {
    console.log(this.model.get('_id'));
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