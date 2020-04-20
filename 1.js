 $(function(){
     $('.book').click(function (e) { 
         e.preventDefault();
         $('.den').addClass('hienlen');
         $('.menuphai').addClass('ra');
     });
     $('#nutclose').click(function (e) { 
         e.preventDefault();
         $('.den').removeClass('hienlen');
         $('.menuphai').removeClass('ra');
     });
     $('.hienlen').click(function (e) { 
         e.preventDefault();
         $('.den').removeClass('hienlen');
         $('.menuphai').removeClass('ra');
     });
 
})  
 