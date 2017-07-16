app.views.AddAdView = Backbone.Marionette.View.extend({

  template: tpl.templates.add_ad,

  regions: {
    leftNavRegion: '.left-navigation',
    countriesPicker: '.country-picker'
  },

  ui: {

  },

  modelEvents: {
    'change': function () {
      this.showChildView('countriesPicker', new app.views.CountriesPickerView({model: this.model.get('countriesModel')}));
    },
  },

  initialize: function() {
    let thisView = this;
    // Initialize left navigation region
    brd.regions.leftNavRegion = thisView.getRegion('leftNavRegion');

    //TODO: find out how to remove fetch 
    thisView.model.fetch();

  },

  onRender: function() {

  },


});