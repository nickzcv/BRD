app.views.LeftNavigation = Backbone.Marionette.View.extend({

  template: tpl.templates.left_navigation,

  ui: {
    dashboard: '.dashboard',
    ads: '.ads',
    companies: '.companies',
    messages: '.messages',
    favorite: '.favorite',
    settings: '.settings'
  },

  events: {
    'click @ui.dashboard': function() {
      brd.router.navigate('#dashboard', {trigger:true});
    },
    'click @ui.ads': function() {
      brd.router.navigate('#ads', {trigger:true});
    },
    'click @ui.settings': function() {
      brd.router.navigate('#settings', {trigger:true});
    },
  },


  templateContext: function() {
    return {
      activePage: this.getOption('page')
    }
  }


});