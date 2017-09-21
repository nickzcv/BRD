app.views.FiltersView = Backbone.Marionette.View.extend({

  template: tpl.templates.filters,

  ui: {
    parent: '.parent',
    sizes: '.subtitle'
  },

  events: {
    // Handle parent checkbox
    'change @ui.parent': function(event) {
      let $element = $(event.target);
      // Toggle hidden class
      if ($element.prop('checked')) {
        $element.parent().parent().next().removeClass('hidden');
      } else {
        $element.parent().parent().next().addClass('hidden');
      }
    },
    'change #delovaya': function(event) {
      let $element = $(event.target);
      if ($element.prop('checked')) {
        this.ui.sizes.removeClass('hidden');
      } else {
        this.ui.sizes.addClass('hidden');
      }
    }
  },

  initialize: function() {
    this.model.showFilters();
  }


});