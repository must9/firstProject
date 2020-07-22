$(document).ready(function () {
    
   "use strict";
    

// Hide and Show Button Scroll Top
   var btnTop = $(".scrollTop");
    
   $(window).scroll(function () {
       
      if($(window).scrollTop() >= 400) {
          
          btnTop.fadeIn();
      }
       
       else {
           
           btnTop.fadeOut();
       }
       
   });
    
    
    
// Animate Scroll To Top
$(btnTop).click(function () {
    
   $("html,body").animate({
       
       scrollTop: 0
       
   }, 1000);
    
});
    
    
});