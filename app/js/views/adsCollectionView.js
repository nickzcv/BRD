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
        //thisView.childViewContainer = 'tbody';
        //thisView.emptyView = app.views.SpinnerView;
        //thisView.model.set({loading: false});

      },
      () => {
/*        thisView.model.set({
          loading: false,
          isError: true,
          errorMessage: 'Unable to get service data. Please try later.',
        });*/
      }
    );
  },

});