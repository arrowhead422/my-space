$(function(){
  
  var interval = 5000;
  var intervalF = setInterval(slide, interval);
  
  
  $('.control').click(function(){
    
    $('.active').removeClass('active');
    $('div.item:eq(' + $(this).data('goto') + ')').addClass('active');
    $('li.control:eq(' + $(this).data('goto') + ')').addClass('active');

    clearInterval(intervalF);
    intervalF = setInterval(slide, interval);
  });
  
  function slide(){
    if($('.active').is('.item:last-child')){
      $('.active').removeClass('active');
      $('div.item').first().addClass('active');
      $('li.control').first().addClass('active');            
    }else{  
      $('div.active').removeClass('active').next().addClass('active'); 
      $('li.active').removeClass('active').next().addClass('active'); 
    }
  }
});
