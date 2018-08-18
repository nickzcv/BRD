app.views.ProfileAvatarView = Mn.View.extend({

  template: tpl.templates.profile_avatar,

  regions: {
    modalSection: '.modal-avatar-section'
  },

  ui: {
    avatar: '.avatar',
  },

  events: {
    'click @ui.avatar': 'showAddAvatarView',
  },

  childViewEvents: {
    'avatar:added': 'render'
  },

  showAddAvatarView: function() {
    this.showChildView('modalSection', new app.views.AddAvatarView());
  },

});