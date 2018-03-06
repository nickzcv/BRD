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

  calculateTSD: function(t, s, d) {
    let tolshina = parseInt(t),
        shirina = parseInt(s),
        dlina = parseInt(d);

    this.set({
      tolshina,
      shirina,
      dlina,
      volume: tolshina*shirina*dlina,
      square: shirina*dlina
    });
  }

});