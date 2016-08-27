$(document).ready(function(){

$(".tweet-compose").click(function() {
  $(this).animate({height: "5em"}, 500);
$("#tweet-controls").show()
$("#tweet-controls").mouseleave(function(){
  $(".tweet-compose").animate({height: "2.5em"}, 500);
  $("#tweet-controls").hide();
})
$("#char-count").keyup(updateCount);
$("#char-count").keydown(updateCount);

function updateCount() {
  var cs = $(this).val().length;
  $("#characters2").text(cs);
}

});




});
