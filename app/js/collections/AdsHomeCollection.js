app.collections.AdsHomeCollection = Backbone.Collection.extend({

  initialize: function(options) {
    if (options) {
      let params = {};
      // Category
      if (options.parameters.selectedCategoryId) {
        params.category = options.parameters.selectedCategoryId;
      }
      // Country
      if (options.parameters.country) {
        params.country = options.parameters.country.id;
      }
      // City
      if (options.parameters.city) {
        params.city = options.parameters.city.id;
      }
      // Type
      if (options.parameters.type) {
        params.type = options.parameters.type;
      }
      // Object
      if (options.parameters.object) {
        params.object = options.parameters.object;
      }
      // Save params object
      this.parameters = params;
    }
  },

  url: function() {
    if (this.parameters) {
      return `api/ads?${$.param(this.parameters, true)}`;
    } else {
      return 'api/ads';
    }
  },


});