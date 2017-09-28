app.views.FiltersView = Backbone.Marionette.View.extend({

  template: tpl.templates.filters,

  ui: {
    parent: '.parent',
    sizes: '.subtitle',
    checkbox: 'input[type="checkbox"]',
    number: 'input[type="number"]'
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
    },
    'change @ui.checkbox': 'changeFilter',
    'change @ui.number': 'changeFilter'
  },

  changeFilter: function(event) {
    // define active element
    let type = event.target.type,
        label = event.target.value;

    if (type === 'checkbox') {
      // Checkoboxes
      console.log(label)

    } else {
      // otherwise Inputs
      console.log('input')
    }

  },

  initialize: function() {
    this.model.showFilters();
  }


});