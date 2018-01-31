app.views.HomeContentView = Mn.View.extend({

  template: tpl.templates.home_content,

  ui: {
    listRegion: '.ads-list',
  },

  regions: {
    adsList: '@ui.listRegion',
  },

  onRender: function() {
    // Main ads section
    if (this.model.get('filters')) {
      this.reRenderCollection();
    } else {
      this.showChildView('adsList', new app.views.AdsHomeCollectionView({}));
    }
  },


  reRenderCollection: function() {
    this.showChildView('adsList', new app.views.AdsHomeCollectionView({
      filters: this.model.get('filters')
    }));
  }


});