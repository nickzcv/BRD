const MyModel = Backbone.Model.extend();

const MyView = Backbone.Marionette.View.extend({
  template: _.template('<h1><%= title %></h1>')
});

const App = Backbone.Marionette.Application.extend({
  region: '#form',

  onBeforeStart: function(app, options) {
    this.model = new MyModel(options.data);
  },

  onStart: function(app, options) {
    this.showView(new MyView({
      model: this.model
    }));
    Backbone.history.start();
  }
});

const app = new App();

app.start({
  data: {
    title: 'Marionette says hello!'
  }
});








$(function() {
  /*
   * Mobile navigation handler (hamburger)
   *
   */
  $('.hamburger').on('click', function() {
    $(this).toggleClass('closeBtn');
    $('.navigation').toggleClass('hidden');
  });

  /*
   * Mobile filter handler
   *
   */
  $('.mobile-filter-btn .btn').on('click', function() {
    $('.filters').toggleClass('visible');
  });

  $('a.close-btn').on('click', function() {
    $('.filters').removeClass('visible');
  });


  $('.register-link').on('click', function() {
    $('#login').modal('hide');
    $('#registration').modal('show');
  });


});


