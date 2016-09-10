$(document).ready(function() {
  $('div').mouseenter(function() {
    $(this).animate({
      height: '+=40px'
    });
  });
  $('div').mouseleave(function() {
    $(this).animate({
      height: '-=40px'
    });
  });
  $('div').click(function() {
    $(this).toggle(200);
  });
});
