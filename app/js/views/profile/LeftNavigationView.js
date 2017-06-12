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
    'click @ui.dashboard': function () {
      brd.router.navigate('#dashboard', {trigger:true});
    },
    'click @ui.settings': function () {
      brd.router.navigate('#settings', {trigger:true});
    },
  },

  initialize: function (options){
    console.log(options);
    this.activePage = options;
    console.log(this.activePage.settings);

    this.test = 123;
    console.log(this);
  }


});