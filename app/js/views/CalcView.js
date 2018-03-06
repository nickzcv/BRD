app.views.CalcView = Mn.View.extend({

  template: tpl.templates.calc,

  regions: {

  },

  ui: {
    form: 'form',
    tolshina: '#tolshina',
    shirina: '#shirina',
    dlina: '#dlina',
    tsd: '#tolshina, #shirina, #dlina',
    count: '#count'
  },

  events: {
    'change @ui.tsd': 'calculateTSD',
    'change @ui.count': 'calculateCount'
  },

  modelEvents: {
    'change': 'render'
  },

  initialize: function() {

  },

  onRender: function() {

  },

  calculateTSD: function() {
    let t = this.ui.tolshina.val(),
        s = this.ui.shirina.val(),
        d = this.ui.dlina.val();

    this.model.calculateTSD(t, s, d);
  },


});