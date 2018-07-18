app.collections.CompaniesByUserCollection = Backbone.Collection.extend({

  url: function() {
    return 'api/companies' + brd.controllers.getUserId();
  },

  comparator: function(m) {
    return -Date.parse(m.get('updated_at'));
  },

});