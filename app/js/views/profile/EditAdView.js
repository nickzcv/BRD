app.views.EditAdView = app.views.AddAdView.extend({

  template: tpl.templates.edit_ad,

  initialize: async function() {
    brd.regions.leftNavRegion = this.getRegion('leftNavRegion');
    try {
      await this.model.fetch();
      this.render();

    } catch (error) {
      console.log(error);
    }

  },

  onRender: function() {
    this.showChildView('leftNavRegion', new app.views.LeftNavigation({page: 'ads'}));


  }

});