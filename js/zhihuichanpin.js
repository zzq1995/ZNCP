$(function(){
    $('.movedx .sub_li').hover(function(event) {
        /* Act on the event */
        $('.subnav').show(500)
    },function(){
        $('.subnav').hide(500)
    });
})
// scroll
$(document).ready(function(){

    $(window).scroll(function(){
        if($(window).scrollTop() >= 100){
            $('#header').css('height','66px')
        }else{
            $('#header').css('height','80px')
        }

        if( $(window).scrollTop() > 7000 ){
            // start all the timers
        $('.timer').each(count);
        }

    })
})

// 智慧产品
$(function(){
    $('.item_zhe').mouseover(function(){
            var a=$(this).index()
            $(this).find('img').css('transform','scale(1.1)')
            
    })

    $('.item_zhe').mouseleave(function() {
        $('.item_img img').css('transform','scale(1.0)')
        
    });
})