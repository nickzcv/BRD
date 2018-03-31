app.views.EditAdView = app.views.AddAdView.extend({

  template: tpl.templates.edit_ad,

  /**
   * @see Mn.View#modelEvents
   * @instance
   * @memberOf app.views.EditAdView
   */
  modelEvents: {
    'change': function() {
      console.log(this.model.attributes)

    }
  },

  initialize: async function() {
    let userId = brd.controllers.getUserId();

    brd.regions.leftNavRegion = this.getRegion('leftNavRegion');

    try {
      let response = await Promise.all([this.model.fetch()]);

      if (response[0].error) {
        this.model.set({
          loading: false,
          isError: true,
          errorMessage: 'Wrong id.',
        });
      } else if (userId != response[0].userId) {
        this.model.set({
          loading: false,
          isError: true,
          errorMessage: 'You can not edit this item.',
        });
      } else {
        this.model.set({
          loading: false
        });
      }
      this.render();
      // Show filters in child view
      this.showChildView('filters', new app.views.FiltersView({
        model: this.model.get('categoryModel')
      }));

      this.showChildView('countriesPicker', new app.views.CountriesPickerView({model: this.model.get('countriesModel')}));
    } catch (error) {
      this.model.set({
        loading: false,
        isError: true,
        errorMessage: 'Service error.',
      });
    }

  },

  onRender: function() {
    this.formAddValidation();
    this.showChildView('leftNavRegion', new app.views.LeftNavigation({page: 'ads'}));

  },

  /*
   * Save Ad
   *
   */
  saveAd: function() {
    console.log('test')
  },

});