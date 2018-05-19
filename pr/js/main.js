
/*****************************************
 Initialize the application
 ******************************************/
$(document).ready(function() {

  $('nav a').on('click', function(event) {
    event.preventDefault();

    // Hide all
    $('section').addClass('hidden');

    if (!$(this).hasClass('active')) {
      $('nav a').removeClass('active');
      $(this).addClass('active');
      // Show selected only
      $('#'+$(this).data('id')).removeClass('hidden');
    } else {
      $(this).removeClass('active');
    }
 
  });

});