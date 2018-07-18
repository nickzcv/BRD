app.views.CompaniesHomeCollectionView = Mn.CollectionView.extend({

  childView: app.views.CompanyShortView,

  initialize: async function() {
    this.collection = new app.collections.CompaniesCollection();
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


