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
  },

  initialize: function() {
    console.log('test model')
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

app.collections.CalcCollection = Backbone.Collection.extend({

  model: app.models.CalcModel,

  initialize: function() {
    console.log('test collection');
    console.log(this);

    this.add([
      {},

    ])
  },

});