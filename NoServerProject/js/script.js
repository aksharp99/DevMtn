


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

var space = false;
var blowup = 0;
$(function() {
  $(document).keyup(function(event) {
    if(event.keyCode == 32) {
      space = false;

    }
  }).keydown(function(event) {
    if(event.keyCode == 32) {
         blowup++;
      if(blowup === 1){
      space = true;
      $('.blockone').effect('explode');
    }
      if(blowup === 2) {
        space = true;
      $('.blocktwo').effect('explode');
      }
      if(blowup === 3) {
        space = true;
      $('.blockthree').effect('explode');
      }
      if(blowup === 4) {
        space = true;
      $('.blockfour').effect('explode');
      }
      if(blowup === 5) {
        space = true;
      $('.blockfive').effect('explode');
      }
      if(blowup === 6) {
        space = true;
      $('.blocksix').effect('explode');
      }
      if(blowup === 7) {
        space = true;
      $('.blockseven').effect('explode');
      }
      if(blowup === 8) {
        space = true;
      $('.blockeight').effect('explode');
      }
      if(blowup === 9) {
        space = true;
      $('.blocknine').effect('explode');
      }
      if(blowup === 10) {
        space = true;
      $('.blockten').effect('explode');
      }
      if(blowup === 11) {
        space = true;
      $('.blockeleven').effect('explode');
      }
      if(blowup === 12) {
        space = true;
      $('.blocktwelve').effect('explode');
      }
      if(blowup === 13) {
        space = true;
      $('.blockthirteen').effect('explode');
      }
      // if(blowup === 14) {
      //   space = true;
      // $('.blockfourteen').effect('explode');
      // }
      if(blowup === 15) {
        space = true;
      $('.blockfifteen').effect('explode');
      }
      if(blowup === 16) {
        space = true;
      $('.blocksixteen').effect('explode');
      }
      if(blowup === 17) {
        space = true;
      $('.blockseventeen').effect('explode');
      }
      if(blowup === 18) {
        space = true;
      $('.blockeighteen').effect('explode');
      }
      if(blowup === 19) {
        space = true;
      $('.blocknineteen').effect('explode');
      }
      if(blowup === 20) {
        space = true;
      $('.blocktwenty').effect('explode');
      }
      if(blowup === 21) {
        space = true;
      $('.blocktwentyone').effect('explode');
      }
      if(blowup === 22) {
        space = true;
      $('.blocktwentytwo').effect('explode');
      }
      if(blowup === 23) {
        space = true;
      $('.blocktwentythree').effect('explode');
      }
      if(blowup === 24) {
        space = true;
      $('.blocktwentyfour').effect('explode');
      }
      if(blowup === 25) {
        space = true;
      $('.blocktwentyfive').effect('explode');
      }
      if(blowup === 26) {
        space = true;
      $('.blocktwentysix').effect('explode');
      }
      if(blowup === 27) {
        space = true;
      $('.blocktwentyseven').effect('explode');
      }
      if(blowup === 28) {
        space = true;
      $('.blocktwentyeight').effect('explode');
      }
      if(blowup === 29) {
        space = true;
      $('.blocktwentynine').effect('explode');
      }
      if(blowup === 30) {
        space = true;
      $('.blockthirty').effect('explode');
      }
      if(blowup === 31) {
        space = true;
      $('.blockthirtyone').effect('explode');
      }
      if(blowup === 32) {
        space = true;
      $('.blockthirtytwo').effect('explode');
      }
      if(blowup === 33) {
        space = true;
      $('.blockthirtythree').effect('explode');
      }
      if(blowup === 34) {
        space = true;
      $('.blockthirtyfour').effect('explode');
      }
      if(blowup === 35) {
        space = true;
      $('.blockthirtyfive').effect('explode');
      }
      if(blowup === 36) {
        space = true;
      $('.blockthirtysix').effect('explode');
      }
      if(blowup === 37) {
        space = true;
      $('.blockthirtyseven').effect('explode');
      }
      if(blowup === 38) {
        space = true;
      $('.blockthirtyeight').effect('explode');
      }
      if(blowup === 39) {
        space = true;
      $('.blockthirtynine').effect('explode');
      }
      if(blowup === 40) {
        space = true;
      $('.blockfourty').effect('explode');
      }
    }
  })
      // console.log('space');


      // $('.blockone').effect('explode',400);
      // $('.blocktwo').effect('explode',390);
      // $('.blockthree').effect('explode',380);
      // $('.blockfour').effect('explode',370);


    });
  });


// var select_element = document.getElementById('img');








// });
