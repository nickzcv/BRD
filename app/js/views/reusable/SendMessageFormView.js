app.views.SendMessageFormView = Backbone.Marionette.View.extend({

  template: tpl.templates.send_message_form,

  initialize: function() {

  },

  templateContext: function() {
    return {
      userId: this.getOption('userId')
    }
  }



});