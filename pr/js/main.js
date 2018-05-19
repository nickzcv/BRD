
/*****************************************
 Initialize the application
 ******************************************/
$(document).ready(function() {

  $('nav a').on('click', function(event) {
    event.preventDefault();


    if (!$(this).hasClass("active")) {
      $('nav a').removeClass("active");
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }

  });

});