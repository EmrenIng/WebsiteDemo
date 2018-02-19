$(window).scroll(function(){
    $(".fade").css("opacity", 1 - $(window).scrollTop() / 350);
  });

 

  // Initialize collapse button
  $(".button-collapse").sideNav();
  
$('.wk-dayname wk-today span').text('sun');

