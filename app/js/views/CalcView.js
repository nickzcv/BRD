app.views.CalcView = Mn.View.extend({

  template: tpl.templates.calc,

  regions: {

  },

  ui: {
    form: 'form',
    tolshina: '#tolshina'
  },

  events: {
    'change @ui.tolshina': function () {
      console.log('test')
    },
  },

  initialize: function() {

  },

  onRender: function() {

  },


});