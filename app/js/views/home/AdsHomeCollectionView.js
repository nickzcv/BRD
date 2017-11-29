app.views.AdsHomeCollectionView = Backbone.Marionette.CollectionView.extend({

  collection: new app.collections.AdsHomeCollection(),

  childView: app.views.adView,

  initialize: async function() {
    this.childViewOptions = {isLoggedIn: brd.controllers.isLoggedIn()};
    this.emptyView = app.views.SpinnerView;
    await this.collection.fetch()
  },

});


