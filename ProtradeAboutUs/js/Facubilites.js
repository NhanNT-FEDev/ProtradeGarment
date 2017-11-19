/**
 * Created by Trung Nhan on 5/23/2017.
 */
$(document).ready(function () {
    $('#rd').on(click,function () {
        $('#fa-rat').css('display','block');
    })
    $('#fa-close').on(click,function () {
        $('#fa-rat').css('display','none');
    });
})