app.views.adsCollectionView = Backbone.Marionette.CollectionView.extend({

  collection: new app.collections.AdsCollection(),

  emptyView: app.views.SpinnerView,

  childView: app.views.adView,

  initialize: function() {
    this.childViewOptions = {isLoggedIn: brd.controllers.isLoggedIn()};
    this.collection.fetch().then(
      () => {
        if (!this.collection.length) {
          // Show message if no items
          this.emptyView = app.views.MessageView;
          this.emptyViewOptions = {
            message: 'Список пуст.'
          };
          this.render();
        }
      },
      () => {
        this.emptyView = app.views.MessageView;
        this.emptyViewOptions = {
          message: 'Error'
        };
        this.render();
      }
    );

  },

});


