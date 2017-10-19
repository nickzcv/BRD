app.views.adsCollectionView = Backbone.Marionette.CollectionView.extend({

  collection: new app.collections.AdsCollection(),

  emptyView: app.views.SpinnerView,

  childView: app.views.adView,


  initialize: function() {

    this.collection.fetch().then(
      () => {

      },
      () => {

      }
    );

  },

});


