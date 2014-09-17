$(document).ready(function() {
  
  var $slider = $("#navSlider");
  var $menuItem = $("nav ul li");
  var $currentPage = $(".current-page");
  var $currentPagePos = $(".current-page").position();
  
  $slider
      .width("5px")
      .height($menuItem.height())
      .css("top", $currentPage.position().top)
      .data("currentPos", $slider.position().top);
  
  $menuItem.hover(function () {
    var $el = $(this);
    var $newPos = $el.position().top;
    
    $slider.stop().animate({
      "top": $newPos + "px"
    }, 200);
  }, function () {
      $slider.stop().animate({
        "top": $slider.data("currentPos")
      }, 200);
  });
});