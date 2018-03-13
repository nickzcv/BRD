app.models.CalcModel = Backbone.Model.extend({

  defaults: {
    tolshina: undefined,
    shirina: undefined,
    dlina: undefined,
    count: undefined,
    volume: 0,
    square: 0,
    resultV: 0,
    resultP: 0,
    table: []
  },

  initialize: function() {

  },

  calculateResult: function(t, s, d, c) {
    let tolshina = parseInt(t),
        shirina = parseInt(s),
        dlina = parseInt(d),
        count = parseInt(c);

    this.set({
      tolshina,
      shirina,
      dlina,
      volume: tolshina*shirina*dlina*0.000000001,
      square: shirina*dlina*0.000001,
      count,
    });

    this.set({
      resultV: this.get('volume')*count,
      resultP: Math.floor(count*dlina*0.001)
    });
  },

  addToTable: function() {
    let table = this.get('table');

    table.push({
      tolshina: this.get('tolshina'),
      shirina: this.get('shirina'),
      dlina: this.get('dlina'),
      count: this.get('count'),
      resultV: this.get('resultV'),
      resultP: this.get('resultP'),
    });

    this.set({
      tolshina: undefined,
      shirina: undefined,
      dlina: undefined,
      count: undefined,
      volume: 0,
      square: 0,
      resultV: 0,
      resultP: 0,
      table
    });
  }

});