app.views.CalcView = Mn.View.extend({

  template: tpl.templates.calc,

  regions: {

  },

  ui: {
    form: 'form',
    tolshina: '#tolshina',
    shirina: '#shirina',
    dlina: '#dlina',
    tsdc: '#tolshina, #shirina, #dlina, #count',
    count: '#count'
  },

  events: {
    'change @ui.tsdc': 'calculateResult'
  },

  modelEvents: {
    'change': 'render'
  },

  initialize: function() {

  },

  onRender: function() {

  },

  calculateResult: function() {
    let t = this.ui.tolshina.val(),
        s = this.ui.shirina.val(),
        d = this.ui.dlina.val(),
        c = this.ui.count.val();

    this.model.calculateResult(t, s, d, c);
  },



});