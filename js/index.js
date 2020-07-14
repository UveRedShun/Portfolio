
$(function(){
    $(".skill-icon").mouseover(function(){
        $(this).css("border","3px solid #ffffff");
        $(this).children(".skill-icon__img").addClass('txt-red');
    });
    $(".skill-icon").mouseout(function(){
        $(this).css("border","0px");
        $(this).children(".skill-icon__img").removeClass('txt-red');
    });
});

var window_h = $(window).height();

$(function(){
    $(window).scroll(function (){
        $('.products-img').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('fadein');
            }
        });
        $('.pd-txt').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('fadein');
            }
        });
        $('.skills-box').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('fadein');
            }
        });
        $('.txt__about').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('fadein');
            }
        });
        $('.selfphoto').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('fadein');
            }
        });
    });
});

$(function(){
    var $btn = $('#page_top');
    var isHidden = true;
    $btn.hide();
        $(window).scroll(function () {

        if( $(this).scrollTop() > 240 ) {
            if( isHidden ) {
                $btn.stop(true,true).fadeIn(200);
                isHidden = false;
            }
        } else {
            if( !isHidden ) {
                $btn.stop(true,true).fadeOut();
                isHidden = true;
            }
        }
    });
    $btn.click(function(){  
        $('html, body').animate({
                'scrollTop': 0
            }, 1000);
            return false;
        });
    });