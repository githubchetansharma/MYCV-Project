$(document).ready(function(){
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    // console.log(scroll);
    if (scroll >=765) {
      
      $("nav").addClass("fadeIn");
      $("nav").removeClass("sticky-top");
      
          }else{
      
        
        $("nav").addClass("sticky-top");

    }
    // console.log(scroll)
       
})
})  