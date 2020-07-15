window.onload = function() {
    // 実行したい処理
    $('.js-modal').fadeIn();
    $('.js-modal-close').on('click',function(){
            location.href="./index.html";
            return false;
        });
}