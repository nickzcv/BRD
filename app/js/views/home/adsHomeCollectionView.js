app.views.adsHomeCollectionView = Backbone.Marionette.CollectionView.extend({

  collection: new app.collections.AdsHomeCollection(),


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

        if (this.collection.length) {
          //this.model.set({noAds: false});
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


