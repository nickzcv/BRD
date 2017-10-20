app.views.MessageView = Marionette.View.extend({

  template: tpl.templates.message,

  templateContext: function() {
    return {
      message: this.getOption('message')
    }
  },

});

