app.models.CalcModel = Backbone.Model.extend({

  defaults: {
    tolshina: null,
    shirina: null,
    dlina: null,
    count: null,
    volume: 0,
    square: 0,
    resultV: 0,
    resultP: 0,
  },

  initialize: function() {
    console.log('initialize CalcModel')
  },

});