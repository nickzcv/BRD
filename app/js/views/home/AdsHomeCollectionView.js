app.views.AdsHomeCollectionView = Mn.CollectionView.extend({

  childView: app.views.adView,

  initialize: async function(options) {
    let parameters = null;

    if (options.filters) {
      parameters = options.filters;
      // After changing filter model will exist
      this.collection = new app.collections.AdsHomeCollection({parameters});
    } else {
      this.collection = new app.collections.AdsHomeCollection();
    }
    this.childViewOptions = {isLoggedIn: brd.controllers.isLoggedIn()};
    // Reset collection to show spinner when filtering
    this.collection.reset();
    this.emptyView = app.views.SpinnerView;

    // Start fetching collection data
    try {
      await this.collection.fetch();
      // If nothing found
      if (!this.collection.length) {
        this.emptyView = app.views.EmptyView;
        this.render();
      }
    } catch (error) {
      console.log(error);
    }
  },

});


