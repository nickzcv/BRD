app.views.FiltersHomeView = Backbone.Marionette.View.extend({

  template: tpl.templates.filter_home,

  regions: {
    countriesPicker: '.country-picker',
  },

  ui: {
    addNewBtn: '.add-new',
    toggleMobileFilters: '.show-mobile-filters',
    filters: '.filters-wrapper',
    closeFiltersBtn: '.close-btn',
    categorySelect: '#category',
    type: 'input[name=type]',
    object: 'input[name=object]',
    dropFilter: '.drop-filter',
  },

  events: {
    'click @ui.addNewBtn': 'addNew',
    'click @ui.toggleMobileFilters': 'toggleFilters',
    'click @ui.closeFiltersBtn': 'toggleFilters',
  },

  modelEvents: {
    'change:country': function () {
      this.triggerMethod('select:country', this);
    },
    'change:city': function () {
      this.triggerMethod('select:city', this);
    }
  },

  triggers: {
    'change @ui.categorySelect': 'select:category',
    'change @ui.type': 'select:type',
    'change @ui.object': 'select:object',
    'click @ui.dropFilter': 'clear:filter',
  },



  onSelectCategory: function(view, event) {
    let selectedCategoryId = parseInt(event.target.value);
    this.model.set({selectedCategoryId});
  },

  onSelectType: function(view, event) {
    let type = this.model.get('type');
    let arr = [];
    // copy existed array into new one
    if (type && type.length) {
      arr = type.slice(0);
    }
    // on select checkbox
    if (event.target.checked) {
      arr.push(event.target.value);
    } else {
      // on deselect checkbox
      let index = arr.indexOf(event.target.value);
      arr.splice(index, 1)
    }
    // set type to NULL if empty array
    arr = arr.length ? arr : null;
    // Save type
    this.model.set({
      type: arr,
    });
  },

  onSelectObject: function(view, event) {
    let object = this.model.get('object');
    let arr = [];
    // copy existed array into new one
    if (object && object.length) {
      arr = object.slice(0);
    }
    // on select checkbox
    if (event.target.checked) {
      arr.push(event.target.value);
    } else {
      // on deselect checkbox
      let index = arr.indexOf(event.target.value);
      arr.splice(index, 1)
    }
    // set object to NULL if empty array
    arr = arr.length ? arr : null;
    // Save object
    this.model.set({
      object: arr,
    });
  },

  addNew: function() {
    // Check is user logged in
    if (brd.controllers.isLoggedIn()) {
      // Redirect to add view
      brd.router.navigateToRoute('profile', 'ads', 'new');
    } else {
      // Show forbidden view
      brd.router.navigateToRoute('forbidden');
    }
  },

  toggleFilters: function() {
    this.ui.toggleMobileFilters.toggleClass('opened');
    this.ui.filters.toggleClass('visible');

  },

  initialize: function() {
    // Show country picker
    this.showChildView('countriesPicker', new app.views.CountriesPickerView({model: this.model.get('countriesModel')}));
  }

});