
// nav
$(document).ready(function(){

    if(($(window).scrollTop() > 50) && ($(window).width() > 767)) {
        $("body").addClass("fixed-header-on");
    } else {
        $("body").removeClass("fixed-header-on");
    }  

    $(window).scroll(function() {
        if(($(window).scrollTop() > 50) && ($(window).width() > 767)) {
            $("body").addClass("fixed-header-on");
        } else {
            $("body").removeClass("fixed-header-on");
        }
    });


})