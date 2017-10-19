app.views.adsCollectionView = Backbone.Marionette.CollectionView.extend({

  collection: new app.collections.AdsCollection(),


  /**
   * @see Marionette.Object#initialize
   *
   * @memberOf app.views.RecommendedChannelsTableView
   * @instance
   */
  initialize: function() {
    this.childView = app.views.adView;
    this.collection.fetch().then(
      () => {
        console.log('Done');
        if (this.collection.length) {
          console.log(this.collection.length);
          this.model.set({noAds: false});
        }
        this.emptyView = app.views.SpinnerView;
        this.model.set({loading: false});
        console.log(this.model);
      },
      () => {
          this.model.set({
          loading: false,
          isError: true,
          errorMessage: 'Unable to get service data. Please try later.',
        });
      }
    );

  },

});


