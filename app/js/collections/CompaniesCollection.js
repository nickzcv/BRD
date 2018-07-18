app.collections.CompaniesCollection = Backbone.Collection.extend({

  url: function() {
    return 'api/companies';
  },

  comparator: function(m) {
    return -Date.parse(m.get('created_at'));
  },

});