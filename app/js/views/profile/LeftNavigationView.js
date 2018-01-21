app.views.LeftNavigation = Mn.View.extend({

  template: tpl.templates.left_navigation,

  templateContext: function() {
    return {
      activePage: this.getOption('page')
    }
  }


});