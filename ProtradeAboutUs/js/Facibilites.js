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
$(document).ready(function(){
    $("#fa-close").click(function(){
        $("#fa-rat").hide();
    });
    $("#rd").click(function(){
        $("#fa-rat").show();
    });
});

// $(window).scroll(function(){
//     var posA = $(window).scrollTop();//lấy vị trí hiện tại tính từ đầu trang tới thanh cuộn
//     $('#wrapper').find('.wrap-inner').each(function(){//tìm các class wrap-inner trong id wrapper
//         var posB = $(this).offset().top;//lấy ra vị trí theo chiều dọc của mỗi class wrap-inner
//         if(posB < posA + 130){//khi cuộn tới vị trí B nhỏ hơn vị trí A
//             $('.current').removeClass("current");//xóa hết các class current
//             var pos = $(this).attr('id');//lấy id của vị trí hiện tại
//             $("[href='#"+pos+"']").addClass("current");//thẻ a nào có href giống với id hiện tại thì thêm vào class current
//         }
//     });
// });