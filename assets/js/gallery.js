 $(document).ready(function(){


// the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  //$('.modal').modal();

 $(".lightBox").on("click", function(){
    $(".backDrop").animate({"opacity": ".70"}, 500);
    $(".box").animate({"opacity": "1.0"}, 500);
    $(".backDrop, .box").css("display", "block");
  });
  
  $(".thumb").on("click", function(){
    var largeImage = $(this).attr("src");
    $(".largeImage").attr({src: largeImage});
  });
  
  $(".close, .backDrop").on("click", function(){
    closeBox();
  });

  function closeBox(){
    $(".backDrop, .box").animate({"opacity": "0"}, 500, function(){
    $(".backDrop, .box").css("display", "none");
    });
  }

});