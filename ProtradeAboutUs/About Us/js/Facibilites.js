/**
 * Created by Trung Nhan on 5/5/2017.
 */

// $(document).ready(function($) {
//     var TopFixMenu = $(".fa-menu-2");
//     var menu = $(".fa-menu");
//         $(window).scroll(function(){
//                 if($(this).scrollTop()>150){
//             TopFixMenu.fadeIn();
//             menu.fadeOut();
//         }else{
//             TopFixMenu.fadeOut();
//             menu.fadeIn();
//         }}
//     )
// });


$(document).ready(function () {
    // var fixMenu=$('.fa-menu');
    $(window).scroll(function () {
        if($(window).scrollTop()>450){
            $('.fa-menu').css('background','none');
            $('.fa-logo h6').css('color','black');
           $('.fa-menu').css('background-color', 'white');
           $('.fa-nav ul li a').css('color', 'black');
        }else {
            $('.fa-menu').css('background','linear-gradient(rgba(0, 0, 0, 1), rgba(255, 255, 255, 0))');
            $('.fa-nav ul li a').css('color','white');
            $('.fa-logo h6').css('color','white');
        }
    })
});

/*
$(document).ready(function () {
    $(window).scroll(function () {
        if($(window).scrollTop()> 550){
            $('.fa-left ul').css('position', 'fixed');
            // $('.fa-left ul').css('background-color', 'red');
            $('.fa-left ul').css('top','0');


        }else {

            $('.fa-left').css('position','relative');
            $('.fa-left ul').css('position', 'absolute');
            $('.fa-left ul').css('left','50%');
            $('.fa-left ul').css('tramsform', 'translateX(-60%)');
            $('.fa-left ul').css('width', '80%');
            $('.fa-left ul').css('top', '50%');

        }
    })
});*/
