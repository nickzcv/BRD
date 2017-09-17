app.views.FiltersView = Backbone.Marionette.View.extend({

  template: tpl.templates.filters,

  ui: {
    parent: '.parent',
  },

  events: {
    'change @ui.parent': function(event) {
      let $element = $(event.target);
      // Toggle hidden class
      if ($element.prop('checked')) {
        $element.parent().parent().next().removeClass('hidden')
      } else {
        $element.parent().parent().next().addClass('hidden')
      }
    }
  },

  initialize: function() {

    this.model.showFilters();


  }


});