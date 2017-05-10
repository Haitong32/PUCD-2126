$(document).ready(function(){
  $("#section1").hide();
  $("#section2").hide();
  $("#section3").hide();
  $("#section4").hide();
  $("#section5").hide();
  $("#section6").hide();
  $("#earth").hide();
  $("#start2").hide();
  $("#subtitle").click(function(){
    var audio = new Audio('music.mp3');
    audio.play();
    $("#start2").show();
    $("#subtitle").fadeOut(1000);
    $("#section1").fadeIn(13000);
    $("#section2").fadeIn(13000);
    $("#section3").fadeIn(13000);
    $("#section4").fadeIn(13000);
    $("#section5").fadeIn(13000);
    $("#section6").fadeIn(13000);
    $("#earth").fadeIn(5000);
    $(".shi").hide();
    $(".huan").hide();
    $("#start").animate({ width: 0,height: 0, left: 0, top:0}, 5000 );
    $("#start2").stop(true, true).delay(1000).animate({ width: 0,height: 0, right: 0, top: 0}, 5000 );
    $("#start3").stop(true, true).delay(2000).animate({ width: 0,height: 0, right: 0, top: "100%"}, 5000 );
    $("#start4").stop(true, true).delay(3000).animate({ width: 0,height: 0, left: 0, top: "100%"}, 5000 );
  });
  $("#shi").click(function(){
    $(".shi").toggle();
  });
  $("#huan").click(function(){
    $(".huan").toggle();
});
});
