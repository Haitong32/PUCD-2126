$(document).ready(function(){
  $(window).scroll(function(){
    $(".hero").css("opacity", 1 - $(window).scrollTop() / 750);
    });
  $(function() {
       $(window).scroll(function () {
          if ($(this).scrollTop() > 700) {
             $(".topbar").addClass('changeColor')
          }
          if ($(this).scrollTop() < 700) {
             $(".topbar").removeClass('changeColor')
          }
       });
    });

});
