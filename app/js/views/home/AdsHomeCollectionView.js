app.views.AdsHomeCollectionView = Backbone.Marionette.CollectionView.extend({

  childView: app.views.adView,

  initialize: async function() {
    let parameters = null;

    if (this.model) {
      parameters = this.model.attributes;
      // After changing filter model will exist
      this.collection = new app.collections.AdsHomeCollection({parameters});
    } else {
      this.collection = new app.collections.AdsHomeCollection();
    }
    this.childViewOptions = {isLoggedIn: brd.controllers.isLoggedIn()};
    // Start fetching collection data
    try {
      await this.collection.fetch();
      this.emptyView = app.views.SpinnerView;
      // If nothing found
      if (!this.collection.length) {
        this.emptyView = app.views.EmptyView;
        this.render();
      }
    } catch (error) {
      console.log(error)
    }
  },

});


