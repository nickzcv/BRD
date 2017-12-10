app.views.AddAvatarView = Backbone.Marionette.View.extend({

  template: tpl.templates.avatar,

  ui: {
    avatarModal: '#avatar',
  },

  events: {
    'hide.bs.modal' : function () {
      this.destroy();
    }
  },

  onRender: function() {
    this.ui.avatarModal.modal('show');

  }

});