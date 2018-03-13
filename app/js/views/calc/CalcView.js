app.views.CalcView = Mn.View.extend({

  template: tpl.templates.calc,

  ui: {
    form: 'form',
    tolshina: '#tolshina',
    shirina: '#shirina',
    dlina: '#dlina',
    tsdc: '#tolshina, #shirina, #dlina, #count',
    count: '#count',
    addBtn: '.add-to-table',
    removeRow: '.remove-row'
  },

  events: {
    'blur @ui.tsdc': 'calculateResult',
    'click @ui.addBtn': function() {
      this.model.addToTable();
    },
    'click @ui.removeRow': 'removingRow'
  },

  modelEvents: {
    'change': 'render'
  },

  onRender: function() {
    if (this.model.get('resultV') > 0) {
      this.ui.addBtn.removeAttr('disabled');
    } else {
      this.ui.addBtn.attr('disabled');
    }

  },

  calculateResult: function() {
    let t = this.ui.tolshina.val(),
        s = this.ui.shirina.val(),
        d = this.ui.dlina.val(),
        c = this.ui.count.val();

    this.model.calculateResult(t, s, d, c);
  },

  removingRow: function(event) {
    let rowNumber = $(event.target).closest('a').data('row');
    let table = this.model.get('table');

    table.splice(rowNumber, 1);
    this.model.set({table});
    this.render();

  },


});