app.views.LeftNavigation = Backbone.Marionette.View.extend({

  template: tpl.templates.left_navigation,

  templateContext: function() {
    return {
      activePage: this.getOption('page')
    }
  }


});