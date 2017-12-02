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
    this.emptyView = app.views.SpinnerView;
    await this.collection.fetch()
  },

});


