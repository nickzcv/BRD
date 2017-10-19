app.views.adsHomeCollectionView = Backbone.Marionette.CollectionView.extend({

  collection: new app.collections.AdsHomeCollection(),

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


