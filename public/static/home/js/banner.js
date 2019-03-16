function feiy_preloader(imgUrl, handleComplete){
    var queue = new createjs.LoadQueue(false);
    var loadFile = [
        {id: "image", src:imgUrl}
    ];
    queue.on("complete", handleComplete, this);
    queue.loadManifest(loadFile);
}

function setBannerPreload(){
    var bigImgDom = $(".main-sec-big-img");
    var smallImg = bigImgDom.data('small-img');
    var bigImg = bigImgDom.data('image-lg');
    var MobileImg = bigImgDom.data('image-xs');
    var imgSrc = '';
    if(!IsPC()){
        imgSrc = MobileImg;
        setBackground({
            dom: bigImgDom,
            src: imgSrc,
            filter: '20px'
        });
    } else {
        imgSrc = bigImg;
        bigImgDom.css({
            'filter': 'blur(20px)'
        })
    }
    if(!imgSrc){
        return;
    }
    feiy_preloader(imgSrc, function(){
        resize();
    })
}

function createImg(src){
    var imgDom = new Image();
    imgDom.src = src;
    return imgDom;
}

function setBackground(obj){
    obj.dom.css({
        'backgroundImage':'url('+obj.src+')',
        'backgroundSize': 'cover',
        'filter': 'blur('+obj.filter+')'
    });
}
setBannerPreload();
$(window).on('resize',resize);
function resize(){
    var imgSrc = '',
        imgDom;
    $('.banner-sec .item').each(function(index,item){
        var $this = $(item);
        if(!IsPC()){
            imgSrc = $this.data('image-xs');
            setBackground({
                dom: $this,
                src: imgSrc,
                filter: 0
            });
            imgSrc = '';
            return;
        }

        imgSrc = $this.data('image-lg');
        imgDom = createImg(imgSrc);
        $this.html(imgDom);
        $this.css({
            'filter': 'blur(0)'
        })
    });

}
$(function(){




    var time = 2;    //进度条时间，以秒为单位，越小越快
    var $barDom = $(".dots-wrap .dot").eq(0),
        $head, tick,
        curIndex = 0,
        prevTarget = null,
        percentTime = 0,
        isPause = false;
    $head = $('.head-banner')
    $head = $('.head-banner').on("initialized.owl.carousel", function(res) {

        progressBar();
    })
    $head = $('.head-banner').owlCarousel({
        loop: true,
        margin: 4,
        dot: true,
        items: 1,
        smartSpeed: 600
    })

    function progressBar(){
        createBar();
        start();
    }

    function createBar(){
        $barDom = $(".dots-wrap .dot").eq(curIndex);
        $barDom.siblings().find('i').html('');
        $barDom.find('i').html('<span></span>');
    }

    function start(){
        percentTime = 0;
        tick = setInterval(interval, 10);
    }

    function interval(){
        percentTime += 1 / time;
        $barDom.find('span').css({
            width: percentTime+'%'
        });
        if(percentTime >= 100){
            clearInterval(tick)
            console.log(isPause)
            if(isPause == false){
                $head.trigger('next.owl.carousel')
            }
        }
    }

    $head.on("translated.owl.carousel",function(res) {
        clearInterval(tick)
        curIndex = res.page.index;
        $(".rela-imgs li").eq(curIndex).addClass('active').siblings().removeClass('active');
        if(curIndex >=  res.item.count){
            curIndex = 0;
        }
        progressBar();
    })

    mouseEvent($(".head-banner-wrap"))
    function mouseEvent(dom){
        dom.on('mouseenter',function(){
            isPause = true;
            interval();
        })
        dom.on('mouseleave',function(){
            isPause = false;
            interval();
        });
    }

    var arrowDate = new Date();
    $(".nav-box .prev").on('click', function(){
        if(new Date() - arrowDate > 800){
            $head.trigger('prev.owl.carousel')
            arrowDate = new Date();
        }
    })

    $(".nav-box .next").on('click', function(){
        if(new Date() - arrowDate > 800){
            $head.trigger('next.owl.carousel')
            arrowDate = new Date();
        }
    })
})
