


$(document).ready(function() {
  $(document).keydown(function(key) {
    switch(parseInt(key.which,10)) {
      //left arrow key pressed
    case 37:
      $('img').animate({left:"-=50px"},'fast');
      break;
     //Up arrow key pressed
    case 38:
      $('img').animate({top:"-=50px"},'fast');
      break;
    //Right arrow key pressed
    case 39:
      $('img').animate({left:"+=50px"},'fast');
      break;
    case 40:
      $('img').animate({top:"+=50px"},'fast');
      break;
    }
  });
  //
  $('div').on('click', function() {
    $(this).effect('explode');
  })
  // $('div').on('click', function() {
  //   $(this).fadeOut('slow');
  // })
  $('div').mouseenter(function() {
    $(this).animate({height: "+=20px", width: "+=20px"},'fast')
  });

  $('div').mouseleave(function() {
    $(this).animate({height: "-=20px", width: "-=20px"}, 'fast')
  });
  //
  $('button').on('click', function() {

      $('img').fadeOut(80);
      $('img').fadeIn(650);

  })



// var select_element = document.getElementById('img');








});
