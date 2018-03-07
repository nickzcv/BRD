app.models.CalcModel = Backbone.Model.extend({

  defaults: {
    tolshina: 0,
    shirina: 0,
    dlina: 0,
    count: 0,
    volume: 0,
    square: 0,
    resultV: 0,
    resultP: 0,
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

});