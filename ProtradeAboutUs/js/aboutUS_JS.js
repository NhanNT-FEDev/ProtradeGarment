/**
 * Created by Trung Nhan on 4/27/2017.
 */

// TopFixedMenu.hide();
$(window).scroll(this, function () {
    var a = $(this).scrollTop();
    if (a > 170) {

        $(".abus-menu-2").css("display", "block");
        $(".abus-menu").fadeOut();
    } else {
        $(".abus-menu-2").fadeOut();
        $(".abus-menu").fadeIn();
    }
})


/*$(window).scroll(this,function () {
 var b=$(this).scrollTop();
 if(b>300){
 $(".abus-glance-box").fadeIn();
 }
 })*/


// $(document).ready(function () {
//     $(window).scroll(this,function () {
//         var y =$(this).scrollTop();
//         if(y>210){
//             $(".abus-fix-menu").css("position","fixed");
//         }else {
//             $(".abus-fix-menu").css("position","fixed");
//         }
//     })
// })
$(window).ready(function () {
    $(".abus-glance-box li a").click(function () {
        $(".abus-glance-box li a").css("color","black");
        $(this).css("color", "yellow");
    })
})
