var app = app || {};

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



});


