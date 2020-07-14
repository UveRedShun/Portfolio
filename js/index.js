
$(function(){
    $(".skill-icon").mouseover(function(){
        $(this).css("border","3px solid #ffffff");
    });
    $(".skill-icon").mouseout(function(){
        $(this).css("border","0px");
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
    });
});

$(function(){
    $(window).scroll(function (){
        $('.pd-txt').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('fadein');
            }
        });
    });
});