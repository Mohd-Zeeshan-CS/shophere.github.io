// Slider //

$(document).ready(function()
{
   $('.slider').slick({

       autoplay:true,
       autoplaySpeed: 2000,
       arrows:false,
       dots:true,
       appendDots:'.slider-dots',
       dotsClass:'dots'
   })  ;

   let hamberger = document.querySelector('.hamberger');
   let times = document.querySelector('.times');
   let mobileNav = document.querySelector('.mobile-nav');

   hamberger.addEventListener('click',function(){
       mobileNav.classList.add('open');

   });


    times.addEventListener('click',function(){
        mobileNav.classList.remove('open');


});

// Dark Mode //

var dark = document.getElementById("dark");

dark.onclick = function(){

    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){

        dark.src="/assets/lite.gif";

    }else{

        dark.src="/assets/dark.gif";

    }

}



});