app.views.CalcView = Mn.View.extend({

  template: tpl.templates.calc,

  regions: {
    tableRegion: '.table-region'
  },

  ui: {
    form: 'form',
    tolshina: '#tolshina',
    shirina: '#shirina',
    dlina: '#dlina',
    tsdc: '#tolshina, #shirina, #dlina, #count',
    count: '#count',
    addBtn: '.add-to-table'
  },

  events: {
    'change @ui.tsdc': 'calculateResult',
    'click @ui.addBtn': 'addToTable'
  },

  modelEvents: {
    'change': 'render'
  },

  onAttach: function() {
    this.showChildView('tableRegion', new app.views.CalcTableView({
      model: this.model
    }));
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

  addToTable: function() {
    console.log('addBtn')
  }

});