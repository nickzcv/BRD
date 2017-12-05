app.views.AdsCollectionView = Backbone.Marionette.CollectionView.extend({

  collection: new app.collections.AdsCollection(),

  childView: app.views.adView,

  initialize: function() {
    this.childViewOptions = {isLoggedIn: brd.controllers.isLoggedIn()};
    this.emptyView = app.views.SpinnerView;

    this.collection.fetch().then(
      () => {
        if (!this.collection.length) {
          // Show message if no items
          this.emptyView = app.views.MessageView;
          this.emptyViewOptions = {
            message: 'Список пуст.',
            placeholder: true
          };
          this.render();
        }
      },
      () => {
        this.emptyView = app.views.MessageView;
        this.emptyViewOptions = {
          message: 'Ошибка сервиса. Попробуйте обновить страницу.',
          placeholder: false
        };
        this.render();
      }
    );

  },

});


