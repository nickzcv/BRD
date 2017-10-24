app.views.adsHomeCollectionView = Backbone.Marionette.CollectionView.extend({

  collection: new app.collections.AdsHomeCollection(),

  //emptyView: app.views.SpinnerView,

  childView: app.views.adView,

  initialize: function() {
    this.childViewOptions = {isLoggedIn: brd.controllers.isLoggedIn()};
    this.emptyView = app.views.SpinnerView;
    this.collection.fetch().then(
      () => {

      },
      () => {

      }
    );

  },

});


