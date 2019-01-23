function sizeHeight(dom,margin){
    var windowHeight = $(window).height(),
        logo_h = $('.logo-wrap').height(),
        setH = windowHeight - logo_h;
    setHeight.call($(dom),setH,margin);
    setHeight.call($('.index-nav-item'),setH,12);
}

function setHeight(height, margin){
    this.height(height - margin);
}

$(".btn-menu").on('click',function(){
    if(!$(this).hasClass('close')){
        $(this).addClass("close");
        $(this).next().removeClass('fadeOutUp')
        $(this).next().show().addClass('swing')
    }else{
        $(this).removeClass("close");
        $(this).next().removeClass('swing')
        $(this).next().addClass('fadeOutUp').hide()
    }
});