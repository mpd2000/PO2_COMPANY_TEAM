$(document).ready(function() {  

  //select all the a tag with name equal to modal
  $('a[name=buy]').click(function(e) {
    //Cancel the link behavior
    e.preventDefault();
    
    //Get the A tag
    var id = $(this).attr('href');
  
    //Get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
  
    //Set heigth and width to mask to fill up the whole screen
    $('#mask').css({'width':maskWidth,'height':maskHeight});
    
    //transition effect
    $('#mask').fadeIn(1000);  
    $('#mask').fadeTo("slow",0.8);  
  
    //Get the window height and width
    var winH = $(window).height();
    var winW = $(window).width();
              
    //Set the popup window to center
    $(id).css('top',  winH/2-$(id).height()/2);
    $(id).css('left', winW/2-$(id).width()/2);
  
    //transition effect
    $(id).fadeIn(2000); 
  
  });
  
  //if close button is clicked
  $('.window .close').click(function (e) {
    //Cancel the link behavior
    e.preventDefault();
    
    $('#mask').hide();
    $('.window').hide();
  });   
  
 
     
  

  $(window).resize(function () {
   
    var box = $('#boxes .window');
 
        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
      
        //Set height and width to mask to fill up the whole screen
        $('#mask').css({'width':maskWidth,'height':maskHeight});
               
        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();

        //Set the popup window to center
        box.css('top',  winH/2 - box.height()/2);
        box.css('left', winW/2 - box.width()/2);
   
  }); 
  
});


//slider
$(document).ready(function() {
  
  var current=0;
  var slide_length = $('.slide_ul>li').length;//amount of images to var
  var btn_ul = '<ul class="slide_btn"></ul>';//add btn list on html
  


  $('.slide_ul>li').hide();//hide img
  $('.slide_ul>li').first().show();//show one img
  
  
  $(btn_ul).prependTo($('.slide'))//btn on slide class
  for (var i = 0 ; i < slide_length; i++){//make circles depends on amount of li
    var child = '<li><a href="#none">'+i+'</a></li>';
    $(child).appendTo($('.slide_btn'));
  }
  
  $('.slide_btn > li > a').first().addClass('active');  
  $('.slide_btn > li > a').on('click' , slide_stop);
  
//auto slide
function autoplay(){
  
  if(current == slide_length-1){
  current = 0;
}else{
  current++;
}
  $('.slide_ul>li').stop().fadeOut(900);
  $('.slide_ul>li').eq(current).stop().fadeIn(700);
  $('.slide_btn > li > a').removeClass('active'); 
  $('.slide_btn > li > a').eq(current).addClass('active');  
}
setInterval(autoplay,2000);//repetation

//when click the button excuted
function slide_stop(){
    var fade_idx = $(this).parent().index(); 
    current = $(this).parent().index();
    if($('.slide_ul > li:animated').length >= 1) return false; //prevent delay of clicking
    $('.slide_ul > li').fadeOut(400);
    $('.slide_ul > li').eq(fade_idx).fadeIn(400);
    $('.slide_btn > li > a').removeClass('active'); 
    $(this).addClass('active');
    
  } 
});
//done



(function($) {

  $.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "",
        
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
        $(this).find("#menu-button").on('click', function(){

          $(this).toggleClass('menu-opened');
          
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) { 
            mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
           
          }
        });
        
        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 795) {
            cssmenu.find('ul').show();
          }

          if ($(window).width() <= 795) {
            cssmenu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($){
$(document).ready(function(){

$("#cssmenu").menumaker({
   title: "",
   format: "multitoggle"
});

});
})(jQuery);
